const Ride = require("../models/ride");

class ConnectedRides {
    from = {};
    to = {};

    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    async getConnectingRides() {
        const { allRides, locations, graph } = await this.createLocationGraph();
        console.table(
            locations.map((loc, idx) => ({
                locationName: loc.locationName,
                index: idx,
            }))
        );
        console.table(graph)
        const paths = this.dijkstra(graph, 5);
        console.log(paths);
    }

    async createLocationGraph() {
        const allRides = await this.getAllRides();
        const locations = this.extractLocationsFrom(allRides);
        const graph = this.createInitialGraphFor(locations);
        this.setGraphWeights(graph, allRides, locations);
        return { allRides, locations, graph };
    }

    async getAllRides() {
        const filters = this.getRideFilter();
        const rides = await Ride.find({ ...filters });
        return rides;
    }

    getRideFilter() {
        const { from, to } = this;
        const fromFilters = {
            "from.latitude": {},
            "from.longitude": {},
        }; 
        const toFilters = {
            "to.longitude": {},
            "to.latitude": {},
        };
        if (from.longitude < to.longitude) {
            fromFilters["from.longitude"]["$gte"] = from.longitude;
            toFilters["to.longitude"]["$lte"] = to.longitude;
        } else {
            fromFilters["from.longitude"]["$lte"] = from.longitude;
            toFilters["to.longitude"]["$gte"] = to.longitude;
        }
        if (from.latitude < to.latitude) {
            fromFilters["from.latitude"]["$gte"] = from.latitude;
            toFilters["to.latitude"]["$lte"] = to.latitude;
        } else {
            fromFilters["from.latitude"]["$lte"] = from.latitude;
            toFilters["to.latitude"]["$gte"] = to.latitude;
        }
        const filters = {
            $or: [
                fromFilters, toFilters
            ]
        }
        return filters;
    }

    extractLocationsFrom(allRides) {
        const locations = [];
        for (const ride of allRides) {
            const fromParsed = locations.findIndex(
                (loc) =>
                    loc.longitude === ride.from.longitude &&
                    loc.latitude === ride.from.latitude
            ) > -1;
            if (!fromParsed) {
                locations.push(ride.from);
            }
            const toParsed =locations.findIndex(
                (loc) =>
                    loc.longitude === ride.to.longitude &&
                    loc.latitude === ride.to.latitude
            ) > -1;
            if (!toParsed) {
                locations.push(ride.to);
            }
        }
        return locations;
    }

    createInitialGraphFor(locations) {
        const graph = [];
        for (const _ of locations) {
            const row = [];
            for (const __ of locations) {
                row.push(0);
            }
            graph.push(row);
        }
        return graph;
    }

    setGraphWeights(graph, allRides, locations) {
        for (const ride of allRides) {
            const fromLocationIndex = locations.findIndex(
                (loc) =>
                    loc.longitude === ride.from.longitude &&
                    loc.latitude === ride.from.latitude
            );
            const toLocationIndex = locations.findIndex(
                (loc) =>
                    loc.longitude === ride.to.longitude &&
                    loc.latitude === ride.to.latitude
            );
            graph[fromLocationIndex][toLocationIndex] = 1
        }
    }

    dijkstra(graph, source=0) {
        const distance = new Array(graph.length);
        const visited = new Array(graph.length);

        for (let i = 0; i < graph.length; i++) {
            distance[i] = Number.POSITIVE_INFINITY;
            visited[i] = false;
        }

        distance[source] = 0;

        for (let i = 0; i < distance.length - 1; i++) {
            const minimum = this.minimumDistance(distance, visited);
            visited[minimum] = true;

            for (let j = 0; j < distance.length; j++) {
                if (
                    visited[j] === false &&
                    graph[minimum][j] !== 0 &&
                    distance[minimum] !== Number.POSITIVE_INFINITY &&
                    distance[minimum] + graph[i][j] < distance[j]
                ) {
                    distance[j] = distance[minimum] + graph[minimum][j];
                }
            }
        }

        return distance;
    }

    minimumDistance(distance, visited) {
        let min = Number.POSITIVE_INFINITY;
        let minIndex = -1;

        for (let i = 0; i < distance.length; i++) {
            if (visited[i] === false && distance[i] <= min) {
                min = distance[i];
                minIndex = i;
            }
        }

        return minIndex;
    }

}

module.exports = ConnectedRides
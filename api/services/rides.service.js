const Ride = require("../models/ride");

class RidesService {

    async getRides(filters={}) {
        if (Object.keys(filters).length === 0) {
            return [];
        }
        const formattedFilters = this.formatFilters(filters);
        const rides = await Ride.find(formattedFilters);
        return rides;
    }

    formatFilters(filters) {
        const { from, to, ...otherFilters } = filters
        const formattedFilters = {
            ...otherFilters
        };
        if (from) {
            formattedFilters.from = {
                locationName: from
            }
        }
        if (to) {
            formattedFilters.to = {
                locationName: to
            }
        }
        return formattedFilters;
    }

}

module.exports = new RidesService
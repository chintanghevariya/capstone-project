import axios from 'axios';

const AUTOCOMPLETE_API_URL = "https://maps.googleapis.com/maps/api/place/autocomplete/json";
const PLACE_DETAIL_API_URL =
    "https://maps.googleapis.com/maps/api/place/details/json";
const token = "AIzaSyAD3HNAwZ_A5ShqokH6RP-B8Nn5S2TTlkc";

export async function getLocationsByName(name) {
    try {
        if (name === undefined || name === null) {
            return [null, null];
        }
        if (typeof name !== "string") {
            throw new Error("Name parameter must be a string");
        }
        if (name.trim() === "") {
            return [null, null];
        }
        if (name.length < 5) {
            return [null, null];
        }
        const request = await axios.get(
            AUTOCOMPLETE_API_URL + `?input=${name}&key=${token}`
        );
        return [request, null];
    } catch (e) {
        return [null, e.message];
    }
}

export async function getLocationDetails(locationId) {
    try {
        if (locationId === undefined || locationId === null) {
            return [null, null];
        }
        if (typeof locationId !== "string") {
            throw new Error("Name parameter must be a string");
        }
        if (locationId.trim() === "") {
            return [null, null];
        }
        const request = await axios.get(
            PLACE_DETAIL_API_URL + `?place_id=${locationId}&key=${token}`
        );
        return [request, null];
    } catch (err) {
        console.error(err);
        return [null, JSON.stringify(err, Object.getOwnPropertyNames(err))];
    }
}
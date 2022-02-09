import axios from 'axios';

export const API_URL = "https://api.locationiq.com/v1";
const token = "pk.e5888301fc6f8975929e024f06f075b0";

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
        if (name.length < 4) {
            return [null, null];
        }
        const request = await axios.get(API_URL + `/autocomplete.php?key=${token}&q=${name}`);
        return [request, null];
    } catch (e) {
        return [null, e.message];
    }
}
import axios from 'axios';
import * as Loc from "expo-location";
import { GetCurrentLocation } from '../components/IndexComponents/HomeComponent/GetCurrentLocation';
import { getToken } from '../helpers/Token';
import { getUser } from '../helpers/user'

const API_URL =
    Platform.OS === "android"
        ? "http://192.168.0.158:4000"
        : "http://localhost:4000";


export async function getRides() {
    const token = await getToken()
    try {
        const request = await axios.post(
            "http://localhost:4000/rides/filter",
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return [request, null];
    } catch (e) {
        return [null, e.message];
    }
}

export async function getRidesAroundUser() {
    try {
        const token = await getToken();
        const location = await GetCurrentLocation();
        const { lat, long } = location;
        const request = await axios.get(
            `${API_URL}/rides/around/user?latitude=${lat}&longitude=${long}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return [request, null];
    } catch (e) {
        console.log(e);
        return [null, e.message];
    }
}

export async function getRideOfCurrentUserAsPassenger() {
    const user = getUser()
    const token = await getToken()
    try {
        const request = await axios.get(
            "http://localhost:4000/rides/of-user/as-passenger",
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        return [request, null];
    }
    catch (e) {
        return [null, e.message];
    }
}
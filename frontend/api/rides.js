import axios from 'axios';
import * as Loc from "expo-location";
import { getToken } from '../helpers/Token';
import {getUser} from '../helpers/user'

export async function getRides() {
    const token = await getToken()
    try {
        const request = await axios.post(
            "http://192.168.0.158:4000/rides/filter",
            {},
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
        const location = await Loc.getCurrentPositionAsync({ enableHighAccuracy: true });
        const { latitude, longitude } = location.coords;
        const request = await axios.get(
            "http://192.168.0.158:4000/rides/around/user?latitude=" + latitude + "&longitude="+ longitude,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            }
        );
        return [request, null];
    } catch (e) {
        return [null, e.message];
    }
}

export async function getRideOfCurrentUser(){
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
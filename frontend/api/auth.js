import axios from 'axios';
import { Platform } from 'react-native';

const API_URL = Platform.OS === "android" ? "http://192.168.0.158:4000" : "http://localhost:4000";

export async function loginUser(email,password) {
    try {
        const request = await axios.post(
            `${API_URL}/rides/login`,
            {
                email,password,
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        return [request, null];
    } catch (e) {
        return [null, e.message];
    }
}

export async function registerUser(userDetails) {
    try {
        const request = await axios.post(
            API_URL + "/users",
            userDetails,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        return [request.data, null];
    } catch (e) {
        return [null, e.message];
    }
}
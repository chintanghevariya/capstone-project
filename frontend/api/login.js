import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export async function loginUser() {
    try {
        const request = await axios.post(
            "http://localhost:4000/rides/login",
            {},
            {
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
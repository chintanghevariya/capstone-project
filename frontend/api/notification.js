import axios from "axios";
import { getToken } from "../helpers/Token";

export async function getCurrentUserNotifications() {
    const token = await getToken();
    try {
        const request = await axios.get(
            "http://192.168.0.158:4000/notifications",
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return [request.data, null];
    } catch (e) {
        return [null, e.message];
    }
}
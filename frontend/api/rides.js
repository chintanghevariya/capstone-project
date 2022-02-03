import axios from 'axios';
import { useEffect, useState } from 'react';
import { getToken } from '../helpers/Token';

export async function getRides() {
    // const [token, setToken] = useState(null)
    // useEffect(() => {
    //     getToken().then((value) => setToken(value))
    // }, []) 
    const token = await getToken()

    try {
        const request = await axios.get(
            "http://localhost:4000/rides/?from=Toronto",
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        return [request, null];
    } catch (e) {
        return [null, e.message];
    }
}
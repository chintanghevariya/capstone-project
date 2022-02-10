import axios from 'axios';
import { useEffect, useState } from 'react';
import { getToken } from '../helpers/Token';
import { getUser } from '../helpers/user'

export async function getRides() {
    const token = await getToken()
    try {
        const request = await axios.post(
            "http://localhost:4000/rides/filter",
            {
                "from.latitude": 20
            },
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

export async function getRideOfCurrentUser() {
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
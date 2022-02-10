import axios from 'axios';
import { useEffect, useState } from 'react';
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

export async function getRideOfCurrentUserAsPassenger(){
    const token = await getToken()
    try {
        const request = await axios.get(
            "http://192.168.0.158:4000/rides/of-user/as-passenger",
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return [request.data, null];
    }
    catch (e) {
        return [null, e.message];
    }
}

export async function getRideOfCurrentUserAsDriver() {
    const token = await getToken();
    try {
        const request = await axios.get(
            "http://192.168.0.158:4000/rides/of-user/as-driver",
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
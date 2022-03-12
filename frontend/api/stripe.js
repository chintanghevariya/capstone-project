import axios from 'axios';
import { getToken } from '../helpers/Token';

const API_URL =
    Platform.OS === "android"
        ? "http://192.168.0.158:4000"
        : "http://localhost:4000";

export async function createCustomer() {
    try {
        const token = await getToken();
        const request = await axios.post(
            `${API_URL}/payments/customer`,
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            }
        );
        return [request, null];
    } catch (e) {
        return [null, e.message];
    }
}

export async function getSetupIntentId() {
    try {
        const token = await getToken();
        const request = await axios.post(
            `${API_URL}/payments/setup`,
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            }
        );
        return [request.data, null];
    } catch (e) {
        return [null, e.message]
    }
}

export async function getPaymentMethods() {
    try {
        const token = await getToken();
        const request = await axios.get(
            `${API_URL}/payments/methods`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
        return [request.data, null];
    } catch (e) {
        return [null, e.message];
    }
}

export async function getCustomerAccount() {
    try {
        const token = await getToken();
        const request = await axios.get(`${API_URL}/payments/customer`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        });
        return [request.data, null];
    } catch (e) {
        return [null, e.message];
    }
}

export async function addToWallet(paymentDetails) {
    try {
        const token = await getToken();
        const request = await axios.post(
            `${API_URL}/payments/wallet`,
            {
                paymentDetails,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
        return [request.data, null];
    } catch (e) {
        return [null, e.message];
    }
}
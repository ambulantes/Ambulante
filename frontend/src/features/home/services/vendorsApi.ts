import { FavoriteVendorResponse } from "../types/vendor";

export const API_URL = "http://192.168.100.35:8080"
const USER_ID = 1;

export async function fetchActiveVendors(): Promise<FavoriteVendorResponse[]> {
    const res = await fetch(`${API_URL}/users/${USER_ID}/favorites`);

    if(!res.ok) {
        throw new Error("Failed to fetch vendors");
    }

    return res.json();
}
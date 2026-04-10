import { FavoriteVendorResponse } from "../types/user";
import { API_URL } from "@/config/api";

const USER_ID = 1;

export async function fetchActiveVendors(): Promise<FavoriteVendorResponse[]> {
    const res = await fetch(`${API_URL}/users/${USER_ID}/favorites`);

    if(!res.ok) {
        throw new Error("Failed to fetch vendors");
    }

    return res.json();
}
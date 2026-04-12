import { HomeProductResponse } from "../types/product";
import { API_URL } from "@/config/api";
import { authFetch } from "@/config/httpClient";

export async function fetchHomeProducts(): Promise<HomeProductResponse[]> {
    const res = await authFetch(`${API_URL}/products/random`);

    if(!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return res.json();
}
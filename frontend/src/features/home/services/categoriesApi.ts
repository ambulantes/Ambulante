import { HomeCategoryResponse } from "../types/categories";
import { API_URL } from "@/config/api";
import { authFetch } from "@/config/httpClient";

export async function fetchHomeCategories(): Promise<HomeCategoryResponse[]> {
    const res = await authFetch(`${API_URL}/categories`);

    if(!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    return res.json();
}
import { useQuery } from "@tanstack/react-query"
import { fetchHomeProducts } from "../services/productsApi"

export function useHomeProducts() {
    return useQuery({
        queryKey: ["home-products"],
        queryFn: fetchHomeProducts
    });
}
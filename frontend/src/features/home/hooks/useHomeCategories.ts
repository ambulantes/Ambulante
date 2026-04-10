import { useQuery } from "@tanstack/react-query";
import { fetchHomeCategories } from "../services/categoriesApi";

export function useHomeCategories() {
    return useQuery({
        queryKey: ["home-categories"],
        queryFn: fetchHomeCategories
    });
}
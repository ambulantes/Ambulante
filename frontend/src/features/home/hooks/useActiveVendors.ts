import { useQuery } from "@tanstack/react-query"
import { fetchActiveVendors } from "../services/usersApi"

export function useActiveVendors() {
    return useQuery({
        queryKey: ["active-vendors"],
        queryFn: fetchActiveVendors
    });
}
import { useAuthStore } from "@/features/auth/store/authStore";

export async function authFetch(url: string, options: RequestInit = {}): Promise<Response> {
    const credentials = useAuthStore.getState().credentials;

    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            ...(credentials ? { Authorization: `Basic ${credentials}` } : {}),
        },
    });
}
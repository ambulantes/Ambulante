import { API_URL } from "@/config/api";

export async function login(email: string, password: string) {
    const credentials = btoa(`${email}:${password}`);

    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${credentials}`,
        },
    });

    if (!response.ok) {
        throw new Error('Credenciales incorrectas');
    }

    return response.json();
}

export async function register(firstName: string, lastName: string, email: string, password: string) {
    const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
    });

    if (!response.ok) {
        throw new Error('Error al registrarse');
    }
}
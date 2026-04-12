import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    imgUrl: string | null;
    isAvailable: boolean;
    isVendor: boolean;
    isMobileVendor: boolean | null;
}

interface AuthState {
    user: User | null;
    credentials: string | null;
    isAuthenticated: boolean;
    setAuth: (user: User, credentials: string) => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            credentials: null,
            isAuthenticated: false,
            setAuth: (user, credentials) => set({ user, credentials, isAuthenticated: true }),
            clearAuth: () => set({ user: null, credentials: null, isAuthenticated: false }),
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
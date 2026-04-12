import { Redirect } from "expo-router";
import { useAuthStore } from "@/features/auth/store/authStore";

export default function Index() {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (isAuthenticated) {
        return <Redirect href="/(tabs)" />;
    }

    return <Redirect href="/(auth)/login" />;
}
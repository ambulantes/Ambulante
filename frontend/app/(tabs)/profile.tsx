import { Button } from "react-native-paper";
import { useAuthStore } from "@/features/auth/store/authStore";
import { router } from "expo-router";

export default function ProfileScreen() {
    const clearAuth = useAuthStore((state) => state.clearAuth);

    const handleLogout = () => {
        clearAuth();
        router.replace("/(auth)/login");
    };

    return (
        <Button onPress={handleLogout}>Cerrar sesión</Button>
    );
}
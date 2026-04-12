import { router } from "expo-router";
import { LoginScreen } from "@/features/auth/screens/LoginScreen";
import { login } from "@/features/auth/services/authService";
import { useAuthStore } from "@/features/auth/store/authStore";
import { btoa } from "abab";

export default function Login() {
    const setAuth = useAuthStore((state) => state.setAuth);

    const handleLogin = async (data: { email: string; password: string }) => {
        try {
            const user = await login(data.email, data.password);
            const credentials = btoa(`${data.email}:${data.password}`) ?? '';
            setAuth(user, credentials);
            router.replace("/(tabs)");
        } catch (error) {
            console.error("Login fallido:", error);
        }
    };

    return (
        <LoginScreen
            onLogin={handleLogin}
            onRegister={() => router.push("/(auth)/register")}
            onForgotPassword={() => console.log("Forgot password")}
        />
    );
}
import { router } from "expo-router";
import { RegisterScreen } from "@/features/auth/screens/RegisterScreen";
import { register } from "@/features/auth/services/authService";

export default function Register() {
    const handleRegister = async (data: { firstName: string; lastName: string; email: string; password: string; confirmPassword: string }) => {
        try {
            await register(data.firstName, data.lastName, data.email, data.password);
            router.replace("/(auth)/login");
        } catch (error) {
            console.error("Registro fallido:", error);
        }
    };

    return (
        <RegisterScreen
            onRegister={handleRegister}
            onLogin={() => router.push("/(auth)/login")}
        />
    );
}
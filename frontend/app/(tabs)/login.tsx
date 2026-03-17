import { router } from "expo-router";
import { LoginScreen } from '@/features/user-features/index';

export default function Login() {
  return(
    <LoginScreen
      onLogin={(data) => {
        console.log("Login data:", data);
      }}
      onRegister={() => router.push("/register")}
      onForgotPassword={() => console.log("Forgot Password")}
    />
  );
}
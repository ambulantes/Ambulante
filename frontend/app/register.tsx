import { router } from "expo-router";
import { RegisterScreen } from '@/features/user-features/index';

export default function Register() {
  return(
    <RegisterScreen
        onRegister={(data) => {
            console.log("Register data:", data);
        }}
        onLogin={() => router.push("/login")}
    />
  );
}
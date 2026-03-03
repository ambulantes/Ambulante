import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { lightTheme } from "../src/shared/lib/theme/theme";

export default function RootLayout() {
  return (
    <PaperProvider theme={lightTheme}> 
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}

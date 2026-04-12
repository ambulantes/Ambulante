import { Slot } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lightTheme } from "../src/shared/lib/theme/theme";

const queryClient = new QueryClient();

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <PaperProvider theme={lightTheme}>
                <Slot />
            </PaperProvider>
        </QueryClientProvider>
    );
}
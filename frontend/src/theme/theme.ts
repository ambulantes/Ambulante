import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";

export const lightTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,

        primary: "#E1251B", // Main actions
        secondary: "#6B7280", // Secondary actions
        error: "#F05545", // Destructive actions like deletion
        
        background: "#F2F2F2", // General background
        surface: "#FFFFFF", // For cards, modals, etc.

        surfaceDisabled: "#D1D5DB", // Disabled components
        onSurfaceDisabled: "#9CA3AF",

        border: "#E5E7EB", // For separators
        textPrimary: "#111827", // Main text
        textSecondary: "#6B7280", // Secondary text
    }
};

export const darkTheme = {
    // TODO: Define colors for dark theme
}
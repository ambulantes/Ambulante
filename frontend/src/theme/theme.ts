import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";

export const lightTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,

        primary: "#E1251B",
        secondary: "#F05545",
        tertiary: "#FFE5E2",
        disabled: "#F2F2F2",
        shadowed: "#6F6F6F"
    }
}

export const darkTheme = {
    // TODO: Define colors for dark theme
}
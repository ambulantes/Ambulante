import { Button, useTheme } from "react-native-paper";

type Variant =
  | "primary"
  | "secondary"
  | "danger"
  | "disabled";

const variantColorMap = {
    primary: "primary",
    secondary: "secondary",
    danger: "error", // Maps our custom danger type to MD3 error type
    disabled: "surfaceDisabled", // Maps our custom disabled type to MD3 surfaceDisabled type 
} as const;

type Props = {
    variant?: Variant;
} & React.ComponentProps<typeof Button>;

export function AppButton({
    variant = "primary",
    style,
    ...props
}: Props) {
    const { colors } = useTheme();

    const themeKey = variantColorMap[variant];
    const buttonColor = colors[themeKey];

    return (
        <Button
            {...props}
            mode="contained"
            buttonColor={buttonColor}
            style={[
                {
                    borderRadius: 12,
                    paddingVertical: 6,
                },
                style,
            ]}
        />
    );
}
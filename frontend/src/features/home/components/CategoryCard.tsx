import { Pressable, View, StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
    name: string;
    icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    onPress: () => void;
};

export function CategoryCard({ name, icon, onPress }: Props) {
    const { colors } = useTheme();

    return (
        <Pressable 
            style={styles.container} 
            onPress={onPress}
        >
            {/* Custom card for categories */}
            <View style={[styles.iconBox, { backgroundColor: colors.surface }]}>
                <MaterialCommunityIcons name={icon} size={28} color={colors.primary} />
            </View>
            <Text variant="bodySmall">{name}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        gap: 6,
    },
    iconBox: {
        width: 64,
        height: 64,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
});
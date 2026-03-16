import { View, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { CategoryCard } from "./CategoryCard";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Category = {
    id: string;
    label: string;
    icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
};

// These are fixed values... DON'T CHANGE
const CATEGORIES: Category[] = [
    { id: "1", label: "Alimentos", icon: "food" },
    { id: "2", label: "Ropa", icon: "tshirt-crew" },
    { id: "3", label: "Calzado", icon: "shoe-sneaker" },
    { id: "4", label: "Accesorios", icon: "glasses" },
    { id: "5", label: "Electronicos", icon: "controller" },
    { id: "6", label: "Recreativos", icon: "robot" },
    { id: "7", label: "Otros", icon: "shape" },
];

export function CategoryList() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text variant="titleMedium" style={styles.title}>Categorías</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scroll}
            >
                {CATEGORIES.map((category) => (
                    <CategoryCard
                        key={category.id}
                        label={category.label}
                        icon={category.icon}
                        onPress={() => router.push(`/search?category=${category.id}` as any)}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 12,
    },
    title: {
        paddingHorizontal: 16,
    },
    scroll: {
        paddingHorizontal: 16,
        gap: 16,
    },
});
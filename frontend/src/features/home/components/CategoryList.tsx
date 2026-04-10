import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "react-native-paper";
import { CategoryCard } from "./CategoryCard";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useHomeCategories } from "../hooks/useHomeCategories";

type Category = {
    id: string;
    label: string;
    icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
};

// Maps the name of each category to an icon
const CATEGORY_ICONS: Record<string, React.ComponentProps<typeof MaterialCommunityIcons>["name"]> = {
    "Alimentos": "food",
    "Ropa": "tshirt-crew",
    "Calzado": "shoe-sneaker",
    "Accesorios": "glasses",
    "Electronicos": "controller",
    "Recreativos": "robot",
    "Otros": "shape",
};

export function CategoryList() {
    const router = useRouter();

    const { data: categories, isLoading, error } = useHomeCategories();

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text variant="titleMedium" style={styles.title}>Categorías</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scroll}
            >
                {categories?.map((category) => (
                    <CategoryCard
                        key={category.id}
                        name={category.name}
                        icon={CATEGORY_ICONS[category.name] ?? "shape"}
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
        loadingContainer: {
        paddingVertical: 32,
        alignItems: "center",
        justifyContent: "center",
    }
});
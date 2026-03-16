import { ScrollView, StyleSheet } from "react-native";
import { ActiveVendorsBar, CategoryList, FeaturedProducts, SearchBar } from "@/features/home/components";

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ActiveVendorsBar />
            <SearchBar />
            <FeaturedProducts title="Recomendado para ti" />
            <CategoryList />
            <FeaturedProducts title="Destacados" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        gap: 32,
    },
});

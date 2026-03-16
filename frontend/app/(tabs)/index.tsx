import { ScrollView, StyleSheet } from "react-native";
import { ActiveVendorsBar, FeaturedProducts } from "@/features/home/components";

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ActiveVendorsBar />
            <FeaturedProducts />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        gap: 16,
    },
});

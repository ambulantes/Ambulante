import { ScrollView, StyleSheet } from "react-native";
import { FeaturedProducts } from "@/features/home/components/FeaturedProduct";

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <FeaturedProducts />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
    },
});

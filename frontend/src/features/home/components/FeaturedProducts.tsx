import { View, StyleSheet, Pressable } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";
import { ProductCard } from "../../products/components/ProductCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
    title: string;
}

const MOCK_PRODUCTS = [
    {
        product: { id: "1", name: "Enfrijoladas con Pollo", price: 135.99, imageUrl: "https://picsum.photos/200/160" },
        vendor: { id: "1", avatarUrl: "https://picsum.photos/40" },
    },
    {
        product: { id: "2", name: "Tacos de Canasta", price: 85.00, imageUrl: "https://picsum.photos/200/161" },
        vendor: { id: "2", avatarUrl: "https://picsum.photos/41" },
    },
    {
        product: { id: "3", name: "Torta de Milanesa", price: 65.00, imageUrl: "https://picsum.photos/200/162" },
        vendor: { id: "3", avatarUrl: "https://picsum.photos/42" },
    },
    {
        product: { id: "4", name: "Agua de Horchata", price: 25.00, imageUrl: "https://picsum.photos/200/163" },
        vendor: { id: "4", avatarUrl: "https://picsum.photos/43" },
    },
];

export function FeaturedProducts({ title }: Props) {
    const { colors } = useTheme();
    const router = useRouter();

    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Text variant="titleMedium">{title}</Text>
                <Pressable
                    style={styles.seeAll}
                    onPress={() => router.push("/products" as any)}
                >
                    <Text variant="bodySmall" style={{ color: colors.primary, fontWeight: "bold" }}>
                        Ver todo
                    </Text>
                    
                    <MaterialCommunityIcons name="chevron-right" size={16} color={colors.primary} />
                </Pressable>
            </View>

            {/* Grid 2x2 */}
            <View style={styles.grid}>
                {MOCK_PRODUCTS.map((item) => (
                    <View key={item.product.id} style={styles.cardWrapper}>
                        <ProductCard
                            product={item.product}
                            vendor={item.vendor}
                        />
                    </View>
                ))}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 12,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    seeAll: {
        flexDirection: "row",
        alignItems: "center",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        rowGap: 12,
    },
    cardWrapper: {
        width: "48%",
    },
});
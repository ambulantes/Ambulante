import { View, StyleSheet, Pressable } from "react-native";
import { Text, useTheme, ActivityIndicator } from "react-native-paper";
import { useRouter } from "expo-router";
import { ProductCard } from "../../products/components/ProductCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useHomeProducts } from "../hooks/useHomeProducts";
import { API_URL } from "@/config/api";

type Props = {
    title: string;
}

export function FeaturedProducts({ title }: Props) {
    const { colors } = useTheme();
    const router = useRouter();

    const { data: products, isLoading, error } = useHomeProducts();

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    if (error) return <Text>Error while loading products</Text>

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
                {products?.map((item) => (
                    <View key={item.id} style={styles.cardWrapper}>
                        <ProductCard
                            product={{
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                imageUrl: item.imgUrl ? `${API_URL}${item.imgUrl}` : undefined
                            }}
                            vendor={{
                                id: item.vendor.id,
                                avatarUrl: item.vendor.imgUrl ? `${API_URL}${item.vendor.imgUrl}` : undefined
                            }}
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
    loadingContainer: {
        paddingVertical: 32,
        alignItems: "center",
        justifyContent: "center",
    }
});
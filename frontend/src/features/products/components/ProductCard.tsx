import { StyleSheet, Pressable } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";

type Props = {
    product: {
        id: string;
        name: string;
        price: number;
        imageUrl: string;
    };
    vendor: {
        id: string;
        avatarUrl: string;
    };
};

export function ProductCard({ product, vendor }: Props) {
    const { colors } = useTheme();
    const router = useRouter();

    return (
        <Card
            style={styles.container}
            onPress={() => router.push(`/products/${product.id}` as any )} // Modify when route is created
        >
            <Card.Cover source={{ uri: product.imageUrl }} style={styles.image} />

            {/*Vendor profile image*/}
            <Pressable
                style={styles.avatarContainer}
                onPress={() => router.push(`/vendors/${vendor.id}` as any )} // Modify when route is created
            >
                <Card.Cover
                    source={{ uri: vendor.avatarUrl }}
                    style={styles.avatar}
                />
            </Pressable>

            <Card.Content style={styles.content}>
                <Text variant="titleMedium" numberOfLines={1}>{product.name}</Text>
                <Text variant="titleSmall" style={{ color: colors.primary }}>
                    ${product.price.toFixed(2)}
                </Text>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
    },
    image: {
        height: 150,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    avatarContainer: {
        position: "absolute",
        top: 10,
        left: 10,
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 20,
    },
    content: {
        paddingTop: 4,
        paddingHorizontal: 8,
        gap: 2,
    },
});
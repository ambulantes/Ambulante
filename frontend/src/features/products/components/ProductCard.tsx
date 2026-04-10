    import { StyleSheet, View } from "react-native";
    import { Card, Text, useTheme } from "react-native-paper";
    import { useRouter } from "expo-router";
    import { UserAvatar } from "@/shared/components/UserAvatar";

    type Props = {
        product: {
            id: number;
            name: string;
            price: number;
            imageUrl?: string;
        };
        vendor: {
            id: number;
            avatarUrl?: string;
        };
    };

    export function ProductCard({ product, vendor }: Props) {
        const { colors } = useTheme();
        const router = useRouter();

        return (
            <Card
                style={[styles.container, { backgroundColor: colors.surface }]}
                onPress={() => router.push(`/products/${product.id}` as any )} // Modify when route is created
            >
                {product.imageUrl && (
                    <Card.Cover
                        source={{ uri: product.imageUrl }}
                        style={styles.image} 
                    />
                )}

                {/*Vendor profile image*/}
                <View style={styles.avatarContainer}>
                    <UserAvatar 
                        userId={vendor.id}
                        avatarUrl={vendor.avatarUrl}
                        size={32}
                    />
                </View>

                <Card.Content style={styles.content}>
                    <Text variant="titleMedium" numberOfLines={1}>{product.name}</Text>
                    <Text variant="titleSmall" style={{ color: colors.primary }}>
                        {`$${product.price.toFixed(2)}`}
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
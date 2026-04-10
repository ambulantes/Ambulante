import { ScrollView, View, StyleSheet } from "react-native";
import { UserAvatar } from "@/shared/components/UserAvatar";
import { useActiveVendors } from "../hooks/useActiveVendors";
import { API_URL } from "@/config/api";

export function ActiveVendorsBar() {
    const { data: vendors, isLoading } = useActiveVendors();

    if (isLoading) return null;

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scroll}
            >
                {vendors?.map((vendor) => (
                    <UserAvatar 
                        key={vendor.id}
                        userId={vendor.id}
                        avatarUrl={vendor.imgUrl ? `${API_URL}${vendor.imgUrl}` : undefined}
                        size={56}
                        isActive
                    />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 12,
    },
    scroll: {
        paddingHorizontal: 16,
        gap: 12,
    },
});


import { ScrollView, View, StyleSheet } from "react-native";
import { UserAvatar } from "@/shared/components/UserAvatar";

//TODO: Delete this mock values and implement backend data
const MOCK_VENDORS = [
    { id: "1", avatarUrl: "https://picsum.photos/40"},
    { id: "2", avatarUrl: "https://picsum.photos/41"},
    { id: "3", avatarUrl: "https://picsum.photos/42"},
    { id: "4", avatarUrl: "https://picsum.photos/43"},
    { id: "5", avatarUrl: "https://picsum.photos/44"},
    { id: "6", avatarUrl: "https://picsum.photos/45"},
    { id: "7", avatarUrl: "https://picsum.photos/46"},
];

export function ActiveVendorsBar() {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scroll}
            >
                {MOCK_VENDORS.map((vendor) => (
                    <UserAvatar 
                        key={vendor.id}
                        userId={vendor.id}
                        avatarUrl={vendor.avatarUrl}
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


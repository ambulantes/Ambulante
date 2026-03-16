import { Pressable, StyleSheet, Image, View } from "react-native";
import { useRouter } from "expo-router";

type Props = { 
    userId: string;
    avatarUrl: string;
    size?: number;
    onPress?: () => void;
    isActive?: boolean;
};

export function UserAvatar({ userId, avatarUrl, size = 40, onPress, isActive }: Props) {
    const router = useRouter();
    
    const handlePress = onPress ?? (() => router.push(`/vendors/${userId}` as any));

    return (
        <View>
            <Pressable onPress={handlePress}>
                <Image
                    source={{ uri: avatarUrl }}
                    style={[
                        styles.avatar,
                        { width: size, height: size, borderRadius: size / 2 }
                    ]}
                />
            </Pressable>

            {/* Green active indicator */}
            {isActive && (
                <View style={styles.activeIndicator} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        borderWidth: 1,
        borderColor: "#FFFFFF",
    },
    activeIndicator: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#22C55E",
        borderWidth: 2,
        borderColor: "#FFFFFF",
    }
});
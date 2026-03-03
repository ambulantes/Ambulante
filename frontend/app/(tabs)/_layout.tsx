import { Tabs } from "expo-router"
import { useTheme } from "react-native-paper"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function TabsLayout() {
    const { colors } = useTheme();

    return (
        <Tabs 
            screenOptions={{
                headerShown: true,
                headerTitleAlign: "center",
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.secondary,
                tabBarStyle: {
                    backgroundColor: colors.surface,
                    borderTopColor: colors.outline,
                }
            }}
        >
        
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen 
                name="map"
                options={{
                    title: "Mapa",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="map-marker" size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen 
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    )
}
import { Text, View } from "react-native";

export default function Index() {
  const name : string = "Alejandro";
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold text-center">Hola como se encuentra mis amigos del CUCEI, aquí el {name}</Text>
    </View>
  );
}

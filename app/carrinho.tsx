import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Cart() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Cart</Text>
      <Button title="Return" onPress={() => router.back()} />
    </View>
  );
}

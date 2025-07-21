import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#3498db" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Lista de Produtos" }} />
      <Stack.Screen name="carrinho" options={{ title: "Carrinho" }} />
    </Stack>
  );
}

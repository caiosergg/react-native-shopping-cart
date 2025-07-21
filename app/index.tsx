import { useRouter } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import produtos from "../products.json";

export default function Home() {
  const router = useRouter();

  function handleCart() {}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Lista de Produtos</Text>
        <TouchableOpacity
          style={styles.buttonCart}
          onPress={() => router.push("/carrinho")}
        >
          <Text>Carrinho</Text>
        </TouchableOpacity>
      </View>

      <View>
        {produtos.map((item) => (
          <View key={item.id} style={styles.row}>
            <View style={styles.info}>
              <Text style={styles.item}>{item.name}</Text>
              <Text style={styles.item}>R$ {item.price}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={{ fontSize: 20, color: "#fff" }}>+</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 25,
    color: "#000",
    padding: 8,
    fontWeight: "bold",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCart: {
    alignSelf: "center",
    marginRight: 8,
    backgroundColor: "blue",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#3498db",
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 20,
  },
  item: {
    fontSize: 16,
  },
});

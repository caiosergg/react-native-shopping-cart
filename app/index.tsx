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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de Produtos</Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => router.push("/carrinho")}
        >
          <Text style={styles.cartButtonText}>Carrinho</Text>
        </TouchableOpacity>
      </View>

      {produtos.map((item) => (
        <View key={item.id} style={styles.productCard}>
          <View>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>R$ {item.price}</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginLeft: 8,
    fontWeight: "bold",
    color: "#333",
  },
  cartButton: {
    backgroundColor: "#3498db",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  cartButtonText: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  productCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fafafa",
  },
  productName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  productPrice: {
    fontSize: 16,
    color: "#777",
    marginTop: 4,
  },
  addButton: {
    backgroundColor: "#3498db",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

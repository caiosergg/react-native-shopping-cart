import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const router = useRouter();

  // Lista de produtos com estado inicial
  const [products, setProducts] = useState([
    { id: 1, name: "Wireless Headphones", price: 199.99 },
    { id: 2, name: "Mechanical Keyboard", price: 89.9 },
    { id: 3, name: "4K Monitor", price: 349.5 },
    { id: 4, name: "USB-C Hub", price: 29.99 },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de Produtos</Text>

        {/* Botão para ir até a tela do carrinho */}
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => router.push("/cart")}
        >
          {/* Indicador da quantidade de itens no carrinho */}
          <View style={styles.dot}>
            <Text style={styles.dotText}>3</Text>
          </View>
          <Feather name="shopping-cart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cartContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 1,
    marginBottom: 8,
    height: 60,
    padding: 12,
    backgroundColor: "#2e86c1",
  },
  cartButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2e86c1",
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "#fafafa",
    borderWidth: 0.5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  dot: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
    position: "absolute",
    zIndex: 99,
    bottom: -4,
    left: -4,
  },
  dotText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

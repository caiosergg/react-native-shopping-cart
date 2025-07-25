import { useRouter } from "expo-router";
import React, { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";
export default function Home() {
  const router = useRouter();

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

        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => router.push("/cart")}
        >
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
    marginTop: 12,
    marginBottom: 12,
    height: 60,
    padding: 12,
    backgroundColor: "#2e86c1",
  },
  cartButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3498db",
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "#fafafa",
    borderWidth: 1,
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

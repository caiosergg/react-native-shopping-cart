import { useRouter } from "expo-router";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function Cart() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  backButton: {},
  backText: {},
  title: {
    fontSize: 30,
    alignSelf: "center",
  },
});

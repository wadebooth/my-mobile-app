import { StatusBar } from "expo-status-bar";
import Counter from "./src/components/Counter";
import Hero from "./src/components/hero";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Hero />
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 38,
  },
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    alignItems: "center",
    justifyContent: "center",
  },
});

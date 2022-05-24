import { StatusBar } from "expo-status-bar";
import Counter from "./src/components/Counter";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hey, I'm a counter.</Text>
      <Button title="Press me please" />
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

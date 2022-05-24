import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}>
        You pushed the button {count} times.
      </Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(count * 0)} />
      <Button title="-" onPress={() => setCount(count - 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  counterContainer: {
    width: "80%",
    Padding: 14,
    Margin: 14,
    backgroundColor: "#D4F1F4",
  },
  counterText: {
    fontSize: 30,
    textAlign: "center",
  },
});

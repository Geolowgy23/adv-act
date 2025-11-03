import { Text, View, StyleSheet } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.content}>Welcome to your dashboard!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "blue" },
  title: { fontSize: 24, marginBottom: 20 },
  content: { fontSize: 18 },
});
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <Link href="/login">
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/signup">
        <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
          <Text style={[styles.buttonText, styles.buttonOutlineText]}>Signup</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0B1220", // deep slate
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 42,
    fontWeight: "900",
    letterSpacing: 2,
    color: "#E2E8F0",
    textTransform: "uppercase",
    marginBottom: 32,
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 0, height: 6 },
    textShadowRadius: 18,
  },
  button: {
    width: 220,
    alignItems: "center",
    paddingVertical: 14,
    marginVertical: 10,
    backgroundColor: "#5B9DF6", // neon-ish blue
    borderRadius: 999,
    elevation: 6, // Android shadow
    shadowColor: "#5B9DF6", // iOS glow
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  buttonText: {
    color: "#0B1220",
    fontWeight: "800",
    letterSpacing: 1,
    fontSize: 16,
    textTransform: "uppercase",
  },
  buttonOutline: {
    backgroundColor: "transparent",
    borderColor: "#5B9DF6",
    borderWidth: 2,
    shadowColor: "transparent",
    elevation: 0,
  },
  buttonOutlineText: {
    color: "#5B9DF6",
  },
});

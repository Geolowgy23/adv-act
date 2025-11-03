import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter for navigation

export default function Signup() {
  const router = useRouter(); // Initialize the router

  const handleSignup = () => {
    router.push("/login"); // Navigate to the Login page
  };

  const handleLoginRedirect = () => {
    router.push("/login"); // Navigate to the Login page when the link is pressed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Username or Email" 
        placeholderTextColor="#ccc" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        placeholderTextColor="#ccc" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Confirm Password" 
        secureTextEntry 
        placeholderTextColor="#ccc" 
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Already have an account? 
        <TouchableOpacity onPress={handleLoginRedirect}>
          <Text style={styles.loginLink}> Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#0a224dff", 
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20, 
    color: "#fff" 
  },
  input: { 
    width: "100%", 
    padding: 10, 
    marginVertical: 10, 
    borderRadius: 5, 
    backgroundColor: "#fff", 
    color: "#000" 
  },
  button: { 
    marginTop: 20, 
    padding: 10, 
    backgroundColor: "red", 
    borderRadius: 5, 
    alignItems: "center", 
    width: "100%" 
  },
  buttonText: { 
    color: "#fff", 
    fontWeight: "bold" 
  },
  loginText: { 
    marginTop: 20, 
    color: "#fff" 
  },
  loginLink: { 
    color: "#fff", 
    fontWeight: "bold" 
  },
});
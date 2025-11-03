import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerTitle: "Main Page", headerTintColor: '#e91e63' }}>
      <Stack.Screen name="index" />
     
    </Stack>
  );
}
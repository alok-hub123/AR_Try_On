import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack screenOptions={{title: "AR Try On"}}>
    <Stack.Screen name="index"  />
  </Stack>
  );
}

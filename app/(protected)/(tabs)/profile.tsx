import { Text } from "@/src/components/Text";
import { View } from "react-native";

export default function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Text>Welcome to the Profile Screen!</Text>
    </View>
  );
}

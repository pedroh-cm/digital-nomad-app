import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function CityDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text onPress={router.back}>City Details Screen {id}</Text>
    </View>
  );
}

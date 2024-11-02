import { Text, View } from "react-native";
import { stylesHomeApp } from "../components/homeapp/style";
// import { MaterialIcons } from "@expo/vector-icons";

export default function Index() {
  const { container, containerText, title } = stylesHomeApp;

  return (
    <>
      <View style={container}>
        <View style={containerText}>
          <Text style={title}>Olive</Text>
        </View>
      </View>
    </>
  );
}

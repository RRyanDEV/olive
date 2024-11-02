import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { stylesHomeApp } from "@/components/homeapp/style";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import Card from "../components/card";

export default function Index() {
  const headerImage = "../../assets/images/iconHeader.png";

  const {
    body,
    containerHeader,
    headerLeftContent,
    logo,
    headerRightContent,
    title,
  } = stylesHomeApp;

  return (
    <>
      <ScrollView>
        <View style={body}>
          <View style={containerHeader}>
            <View style={headerLeftContent}>
              <Image source={require(headerImage)} style={logo}></Image>
              <Text style={title}>Olive</Text>
            </View>
            <View style={headerRightContent}>
              <TouchableOpacity activeOpacity={0.4}>
                <MaterialIcons
                  name="add"
                  size={35}
                  color={colors.palette["300"]}
                ></MaterialIcons>
              </TouchableOpacity>
            </View>
          </View>

          <Card></Card>
          <Card></Card>
          <Card></Card>
        </View>
      </ScrollView>
    </>
  );
}

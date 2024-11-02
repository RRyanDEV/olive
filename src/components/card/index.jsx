import { Text, View } from "react-native";
import { stylesCard } from "../../components/card/styles";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";
import { TouchableOpacity } from "react-native";

export default function Card() {
  const {
    cardStyle,
    container,
    leftContent,
    cardInfor,
    cardTitle,
    cardSubtile,
    options,
    size,
  } = stylesCard;

  return (
    <>
      <View style={cardStyle}>
        <View style={container}>
          <View style={leftContent}>
            <MaterialIcons
              size={55}
              color={colors.palette["200"]}
              name="folder"
            ></MaterialIcons>

            <View style={cardInfor}>
              <Text style={cardTitle} numberOfLines={1}>
                Atividade 1 - Media Queries
              </Text>
              <Text style={cardSubtile}>7zip</Text>
            </View>
          </View>

          <View style={options}>
            <TouchableOpacity activeOpacity={0.4}>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={24}
                color={colors.palette["200"]}
              />
            </TouchableOpacity>
            <Text style={size}>500MB</Text>
          </View>
        </View>
      </View>
    </>
  );
}

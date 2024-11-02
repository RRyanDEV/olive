import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const stylesHomeApp = StyleSheet.create({
  container: {
    backgroundColor: colors.palette["primary"],
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  containerText: {
    marginTop: 10,
  },
  title: {
    color: colors.palette["primaryTitle"],
  },
});

import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const stylesHomeApp = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
  },
  containerHeader: {
    backgroundColor: colors.palette["200"],
    paddingTop: 40, // Remover na versão web
    marginBottom: 20,
    paddingBottom: 5,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  headerLeftContent: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  logo: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: "20px",
    color: colors.palette["300"],
  },
});

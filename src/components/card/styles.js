import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const stylesCard = StyleSheet.create({
  cardStyle: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  container: {
    flexDirection: "row",
    height: 70,
    borderColor: colors.palette["200"],
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  cardInfor: {
    alignItems: "flex-start",
    width: 210,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.palette["200"],
  },
  cardSubtile: {
    fontSize: 12,
    fontWeight: "semibold",
    color: colors.palette["400"],
  },
  options: {
    alignItems: "flex-end",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 15,
    marginRight: 5,
  },
  size: {
    color: colors.palette["300"],
  },
});

import { StyleSheet } from "react-native";
import { colors, metrics } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.baseMargin,
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    borderRadius: metrics.baseRadius * 2
  },

  repository: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding
  },

  image: {
    borderRadius: 100,
    height: 48,
    width: 48
  }
});

export default styles;

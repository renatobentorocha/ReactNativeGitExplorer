import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    padding: metrics.basePadding
  },

  form: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#dbd7d7",
    borderBottomWidth: 1,
    paddingBottom: metrics.basePadding
  },

  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 2,
    height: 44,
    paddingHorizontal: metrics.basePadding
  },

  button: {
    marginLeft: 10,
    borderRadius: metrics.baseRadius
  }
});

export default styles;

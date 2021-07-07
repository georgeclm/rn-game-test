import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../constants/colors";

const Card = (props) => {
  // double style in component
  return (
    //   use children to make the component can store inside data
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    // shadow only work in ios in android use elevation
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});
export default Card;

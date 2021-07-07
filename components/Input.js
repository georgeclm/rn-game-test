import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  // add all the props and put it inside the component like forwarding a props
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};
const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;

import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";

function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game is Over</Text>
      <NumberContainer>
        Number of rounds! : {props.roundsNumber}
      </NumberContainer>
      <NumberContainer>Number was: {props.userNumber}</NumberContainer>
      <Button title="NEW GAME" onPress={props.newGame} color={colors.accent} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default GameOverScreen;

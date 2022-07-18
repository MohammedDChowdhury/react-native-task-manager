import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around", // main axis
    alignItems: "flex-end", // cross axis
    paddingTop: 40,
    backgroundColor: "#ddd",
    borderWidth: 5,
    marginTop: 21,
  },
  boxOne: {
    flex: 1,
    backgroundColor: "violet",
    padding: 10,
    borderWidth: 4,
    borderColor: "black",
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "gold",
    padding: 20,
    borderWidth: 4,
    borderColor: "black",
  },
  boxThree: {
    flex: 1,
    backgroundColor: "coral",
    padding: 30,
    borderWidth: 4,
    borderColor: "black",
  },
  boxFour: {
    flex: 1,
    backgroundColor: "skyblue",
    padding: 40,
    borderWidth: 4,
    borderColor: "black",
  },
});

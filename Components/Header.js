import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";

const Header = ({ title = "E-commerce" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGreen,
    height: 100,
    width: "100%",
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "OpenSansRegular",
    color: "white",
  },
});

import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { colors } from "../../Styles/colors";
import { Dimensions, useWindowDimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CategoryItem = ({ category }) => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <ImageBackground
        source={category.image}
        resizeMode="cover"
        style={{
          ...styles.container,
          maxWidth: 0.43 * width,
          maxHeight: 0.43 * width,
          margin: width < 330 ? 10 : 15,
        }}
      ></ImageBackground>
      <View style={styles.boxTitle}>
        <Text style={styles.text}>{category.category}</Text>
      </View>
    </>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  imagebg: {
    width: 150,
    height: 150,
  },
  container: {
    width: 150,
    height: 150,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    backgroundColor: colors.regularBlue,
    // borderRadius: 10,
    zIndex: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
  },
  text: {
    fontSize: 13,
    fontFamily: "OpenSansBold",
    textAlign: "center",
  },
  boxTitle: {
    textAlign: "center",

    backgroundColor: "white",
    width: 150,
    paddingVertical: 10,
    alignSelf: "center",
    position: "relative",
    top: -20,
    zIndex: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});

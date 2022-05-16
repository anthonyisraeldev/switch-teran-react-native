import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>

        {product.offer && <Text style={styles.offer}>Oferta</Text>}
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    width: 315,
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 20,
      height: 50,
    },
    shadowOpacity: 8.42,
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
  },
  offer: {
    backgroundColor: "#b8ceff",
    textAlign: "center",
    borderRadius: 4,
    marginTop: 10,
    color: "#407bff",
    fontFamily: "OpenSansBold",
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontSize: 12,
    width: 60,
  },
  title: {
    fontFamily: "OpenSansBold",
    color: "#0c111c",
    marginBottom: 4,
    fontSize: 15,
  },
  price: {
    fontSize: 14,
    color: "#464e5e",
  },
});

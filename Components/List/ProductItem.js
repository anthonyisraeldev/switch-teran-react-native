import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        {product.offer && (
          <View style={styles.boxOffer}>
            <Text style={styles.offer}>Oferta</Text>
          </View>
        )}
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
    shadowColor: "#b1b1b1",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 10.42,
    shadowRadius: 2,
    elevation: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
  },
  boxOffer: {
    borderRadius: 4,
    backgroundColor: "#b8ceff",
    marginTop: 10,
  },
  offer: {
    textAlign: "center",
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

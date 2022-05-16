import { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import CategoriesScreen from "./Screens/CategoriesScreen";
import ProductsScreen from "./Screens/ProductsScreen";
import { useFonts } from "expo-font";
import DetailScreen from "./Screens/DetailScreen";
// import { SafeAreaView } from "react-native-safe-area-context";

import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [categorySelected, setCategorySelected] = useState(null);
  const [productSelected, setProductSelected] = useState(null);

  const handleCategory = (category) => {
    setCategorySelected(category);
  };

  const handleProduct = (product) => {
    setProductSelected(product);
  };

  const [loaded] = useFonts({
    OpenSansRegular: require("./assets/Fonts/OpenSans/OpenSans-Regular.ttf"),
    OpenSansBold: require("./assets/Fonts/OpenSans/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  console.log(loaded);
  console.log(productSelected);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      {!categorySelected ? (
        <CategoriesScreen handleCategory={handleCategory} />
      ) : !productSelected ? (
        <ProductsScreen
          category={categorySelected}
          handleProduct={handleProduct}
          handleCategory={handleCategory}
        />
      ) : (
        <DetailScreen product={productSelected} handleProduct={handleProduct} />
      )}
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});

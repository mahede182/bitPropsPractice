import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

console.log(` height = ${windowHeight} width = ${windowWidth}`);
const FlexboxExample = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );

  const onDimensionChange = ({ window }) => {
    setScreenWidth(window.width);
  };
  Dimensions.addEventListener("change", onDimensionChange);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Flexbox Example</Text>
      <View
        style={{ flex: 1, backgroundColor: "red", width: 50, height: 50 }}
      />
      <View
        style={{ flex: 1, backgroundColor: "green", width: 50, height: 50 }}
      />
      <View
        style={{ flex: 1, backgroundColor: "blue", width: 50, height: 50 }}
      />
      <Text>Current screen width: {screenWidth}</Text>
    </View>
  );
};

export default FlexboxExample;

import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
//  It defines two constants, that retrieve the width and height of the device's screen
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

console.log(` height = ${windowHeight} width = ${windowWidth}`);
const DimensionPropPrac = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );

  const onDimensionChange = ({ window }) => {
    setScreenWidth(window.width);
  };
  // The addEventListener() method is called to listen for any changes in the screen's dimensions and runs the function "onDimensionChange" when it detects a change.
  Dimensions.addEventListener("change", onDimensionChange);
  return (
    <>
      <Text>Current screen width: {screenWidth}</Text>
    </>
  );
};
export default DimensionPropPrac;

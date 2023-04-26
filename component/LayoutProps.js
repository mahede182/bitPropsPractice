import React, { Component } from "react";
import { View } from "react-native";

/*
 * Difference between align-content and align-items?
 *
 * align-content determines the spacing between lines -------------
 *
 * align-items determines how the items as a whole are aligned within the container.
 *
 * When there is only one line, align-content has no effect
 * 
 */
const LayoutPropsExample = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "space-around",
      }}
    >
      <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "blue" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "yellow" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "purple" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "orange" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "pink" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "gray" }} />
    </View>
  );
};

export default LayoutPropsExample;

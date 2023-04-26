import React, { useState } from "react";
import { View ,Text} from "react-native";


const ViewPropsOnLayout = ({ progress }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [fillWidth, setFillWidth] = useState(0);

  const handleContainerLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const handleFillLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setFillWidth(width);
  };

  const progressPercent = progress * 100;

  return (
    <View
      style={{
        height: 10,
        backgroundColor: "lightgray",
      }}
      onLayout={handleContainerLayout}
    >
      <View
        style={{
          height: 10,
          backgroundColor: "blue",
        }}
        onLayout={handleFillLayout}
      >
        <View
          style={{
            position: "absolute",
            top: -20,
            right: 0,
            paddingHorizontal: 5,
            backgroundColor: "white",
          }}
        >
          <Text>{progressPercent}%</Text>
        </View>
      </View>
    </View>
  );
};
export default ViewPropsOnLayout
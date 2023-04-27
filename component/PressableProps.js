/*
* press interactions on any of its defined children.
  
*/
import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

const PressableComponentPrac = () => {
  const [pressText, setPressText] = useState("");

  const handleHover = () =>{
    console.log("you hover")
  }
  return (
  <>
    <Pressable
      style={styles.container}
      onPress={() => console.log("You presssed")}
      onPressIn={() => setPressText("Pressable button pressed in!")}
      onPressOut={() => setPressText("Pressable button pressed out!")}
      onLongPress={() => setPressText("Pressable button long pressed!")}
      delayLongPress={2000}
      android_disableSound={false}
      android_ripple={{
        color: "gray",
        borderless: false,
      }}
      hitSlop={20}
      accessibilityLabel={"Pressable button"}
      accessibilityRole={"button"}
      accessibilityHint={"Press to perform an action"}
      testID={"pressable-button"}
      onHoverIn={handleHover}
    >
      <Text style={styles.text}>Hello world</Text>
    </Pressable>
    <View style={{height: 200}}>
       <Text> Hello </Text>
    </View>
  </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "red"
  },
});

export default PressableComponentPrac;

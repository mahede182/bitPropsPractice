import React, { useState, useRef } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import {} from "react-native-web";

const TextInputProps = () => {
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const handleChangeText = (newText) => {
    setText(newText);
    console.log(text);
  };
// hoh it's working
  const handleClear = () => {
    inputRef.current.clear();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        value={text}
        placeholder="Type here..."
        autoCapitalize="words"
        autoComplete="name"
        autoCorrect={true}
        caretHidden={true}
        // defaultValue = "Khaled"
        cursorColor="red"
        enterKeyHint="enter"
        inputMode="email"
        multiline={true}
        placeholderTextColor="red"
        selectionColor="black"
        textAlign="right"
        ref={inputRef}
        onBlur={handleClear}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
  },
});

export default TextInputProps;

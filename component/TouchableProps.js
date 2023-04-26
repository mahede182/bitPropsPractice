import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React,{useState} from 'react'
// what is the main use of touchable opacity
const TouchableProps = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
    <View style={styles.countContainer}>
      <Text>Count: {count}</Text>
    </View>
    <TouchableOpacity
    nextFocusDown  = { 5 }
    nextFocusRight = {1}
    activeOpacity = {0.01}

    style={styles.button} onPress={onPress}>
      <Text>Press Here</Text>
    </TouchableOpacity>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      borderColor: '#add',
      borderRadius: 10,
      borderWidth: 10,
      margin: 20
    },
    countContainer: {
      alignItems: 'center',
      padding: 15,
      borderColor: '#aaa',
      borderWidth: 10,
      backgroundColor: 'tomato'
    },
  });


export default TouchableProps
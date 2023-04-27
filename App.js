import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledPropsPrac from './component/StyledPropsPrac';
import DimensionPropPrac from './component/DimensionPropsPrac';
import LayoutPropsExample from './component/LayoutProps';
import TouchableProps from './component/TouchableProps';
import ViewProps from './component/ViewProps';
import ViewPropsOnLayout from './component/ViewPropsOnLayout';
import ModalProps from './component/ModalProps';
import SwitchProps from './component/SwitchProps';
import StatusBarProps from './component/StatusBarProps';
import PressableComponentPrac from './component/PressableProps';
import TextInputProps from './component/TextInputProps';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <StyledPropsPrac /> */}
      {/* <DimensionPropPrac /> */}
      {/* <LayoutPropsExample /> */}
      {/* <TouchableProps /> */}
      {/* <ViewProps /> */}
      {/* <ViewPropsOnLayout /> */}
      {/* <ModalProps /> */}
      {/* <SwitchProps /> */}
      {/* <StatusBarProps /> */}
      {/* <PressableComponentPrac /> */}
      <TextInputProps />
      <Text>Hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
});

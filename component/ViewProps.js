/* What is accessibility
 * Accessibility refers to the design of products, devices, services as to be usable by everyone(including people with disabilities)
 * example: movie subtitle where it's not for who can hear.
 * audience: vision issue, hearing issue, cognative issue
 * small % user but programmer lot of work
 * for react native apps it only readable for screen reader
 * in ios = iOS voiceOver & android = Android Accessiblility Suit
 */
import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const ViewProps = () => {
  const increaseFontSize = () => {
    console.log("Font size increased.");
  };

  const decreaseFontSize = () => {
    console.log("Font size decreased.");
  };

  const accessibilityActions = [
    { name: "increaseFontSize", label: "Increase font size" },
    { name: "decreaseFontSize", label: "Decrease font size" },
  ];

  const onAccessibilityAction = (event) => {
    switch (event.nativeEvent.actionName) {
      case "increaseFontSize":
        increaseFontSize();
        break;
      case "decreaseFontSize":
        decreaseFontSize();
        break;
      default:
        break;
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    setIsLoading(true);

    // Perform some long-running task
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <View
      accessible={true}
      accessibilityRole={"button"}
      accessibilityActions={accessibilityActions}
      onAccessibilityAction={onAccessibilityAction}
    //   The aria-busy="true" attribute is added to indicate that the button is currently busy and a task is being performed
      aria-busy="true"
    //   This defines how far a touch event can start away from the view
      hitSlop={{top: 20, bottom: 220, left: 0, right: 0}}
    >
      <Text>Increase</Text>
      <Button
        title="Process Data"
        onPress={handlePress}
        accessibilityLabel="Button to process data"
        accessibilityHint="Button will trigger a long-running task"
        accessibilityRole="button"
        accessibilityState={{ busy: isLoading }}
        // hitSlop={{top: 20, bottom: 220, left: 0, right: 0}}
      />
    </View>
  );
};

export default ViewProps;

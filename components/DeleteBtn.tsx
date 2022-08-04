import { Animated, Pressable, ViewStyle } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

type DeleteIconProps = {
  onPress: () => void;
  style?: ViewStyle;
};

export const DeleteBtn = ({ onPress }: DeleteIconProps) => {
  let animation = new Animated.Value(0);

  const animate = (toValue: number) => () => {
    Animated.timing(animation, {
      toValue,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const fadeIn = animate(1);
  const fadeOut = animate(0);

  return (
    <Pressable onPress={onPress} onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 40,
          height: 40,
          borderRadius: 100,
          margin: 10,
          padding: 25,
          backgroundColor: animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["rgba(238, 238, 238, 0)", "rgba(238, 238, 238, 1)"],
          }),
        }}
      >
        <FontAwesomeIcon icon={faTrashCan} size={20} />
      </Animated.View>
    </Pressable>
  );
};

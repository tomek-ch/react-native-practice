import { Text, View, ViewStyle } from "react-native";
import { ToDo } from "../hooks/useToDos";
import { DeleteBtn } from "./DeleteBtn";
import { Animated } from "react-native";
import { useEffect, useRef } from "react";

type ToDoItemProps = {
  toDo: ToDo;
  style?: ViewStyle;
  remove: (id: number) => void;
};

export const ToDoItem = ({
  toDo: { text, id },
  remove,
  style = {},
}: ToDoItemProps) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.9)).current;

  const animate = (
    animation: Animated.Value,
    toValue: number,
    cb = () => {}
  ) => {
    Animated.timing(animation, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start(cb);
  };

  // Fade out on delete
  const handleRemove = () => {
    console.log("handle remove");
    animate(scale, 0.9);
    animate(opacity, 0, () => {
      console.log("remove by id");
      remove(id);
    });
  };

  // Fade in on mount
  useEffect(() => {
    animate(opacity, 1);
    animate(scale, 1);
  }, []);

  return (
    <Animated.View
      needsOffscreenAlphaCompositing
      style={{
        backgroundColor: "#fff",
        opacity,
        transform: [{ scale }],
        elevation: 10,
        shadowColor: "#999",
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        ...style,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            padding: 20,
            paddingRight: 0,
            flexWrap: "wrap",
            flex: 0,
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          {text}
        </Text>
      </View>
      <DeleteBtn onPress={handleRemove} />
    </Animated.View>
  );
};

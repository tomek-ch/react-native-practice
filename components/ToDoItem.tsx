import { LayoutAnimation, Text, View, ViewStyle } from "react-native";
import { ToDo } from "../hooks/useToDos";
import { DeleteBtn } from "./DeleteBtn";
import { Animated } from "react-native";
import { useRef } from "react";

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
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const handleRemove = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(scale, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      remove(id);
    });
  };

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

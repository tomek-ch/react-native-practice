import { Pressable, Text, View, ViewStyle } from "react-native";
import { ToDo } from "../hooks/useToDos";
import { DeleteBtn } from "./DeleteBtn";
import Animated, {
  Layout,
  SlideInLeft,
  SlideOutRight,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type ToDoItemProps = {
  toDo: ToDo;
  style?: ViewStyle;
  remove: (id: number) => void;
  onPress: () => void;
};

export const ToDoItem = ({
  toDo: { text, id },
  remove,
  onPress,
  style = {},
}: ToDoItemProps) => {
  const handleRemove = () => {
    remove(id);
  };

  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      entering={SlideInLeft}
      exiting={SlideOutRight}
      layout={Layout}
      style={animatedStyle}
    >
      <Pressable
        onPress={() => {
          scale.value = withTiming(0.9, { duration: 100 }, () => {
            scale.value = withTiming(1, { duration: 100 });
          });
          onPress();
        }}
        needsOffscreenAlphaCompositing
        style={{
          backgroundColor: "#fff",
          elevation: 10,
          shadowColor: "#00000066",
          marginHorizontal: 20,
          marginBottom: 20,
          borderRadius: 10,
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          overflow: "visible",
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
      </Pressable>
    </Animated.View>
  );
};

import { Text, View, ViewStyle } from "react-native";
import { ToDo } from "../hooks/useToDos";
import { DeleteBtn } from "./DeleteBtn";
import Animated, {
  Layout,
  SlideInLeft,
  SlideOutRight,
} from "react-native-reanimated";

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
  const handleRemove = () => {
    remove(id);
  };

  return (
    <Animated.View
      entering={SlideInLeft}
      exiting={SlideOutRight}
      layout={Layout}
      needsOffscreenAlphaCompositing
      style={{
        backgroundColor: "#fff",
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

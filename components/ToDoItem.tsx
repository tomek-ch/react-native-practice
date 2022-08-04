import { Text, View, ViewStyle } from "react-native";
import { ToDo } from "../hooks/useToDos";
import { DeleteBtn } from "./DeleteBtn";
import Animated, { FadeIn, FadeOut, Layout } from "react-native-reanimated";

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
  return (
    <Animated.View
      layout={Layout}
      entering={FadeIn}
      exiting={FadeOut}
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
      <DeleteBtn
        onPress={() => {
          remove(id);
        }}
      />
    </Animated.View>
  );
};

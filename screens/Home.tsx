import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, ScrollView, View } from "react-native";
import { ScreenProps } from "../App";
import { AddToDo } from "../components/AddToDo";
import { ToDoItem } from "../components/ToDoItem";
import { useToDosContext } from "../context/ToDosContext";

type HomeProps = ScreenProps<"Home">;

export const Home = ({ navigation: { navigate } }: HomeProps) => {
  const { createToDo, removeToDo, setPlaceholderData, toDos } =
    useToDosContext();

  const onPress = () => navigate("Details");

  return (
    <>
      <AddToDo handleAdd={createToDo} />
      {/* <FlatList
    data={toDos}
    renderItem={({ item, index }) => (
      <ToDoItem
        toDo={item}
        remove={removeToDo}
        style={{ marginTop: !index ? 20 : 0 }}
      />
    )}
  /> */}
      <ScrollView>
        {toDos.map((item, index) => (
          <ToDoItem
            key={item.id}
            toDo={item}
            remove={removeToDo}
            onPress={onPress}
            style={index ? {} : { marginTop: 20 }}
          />
        ))}
      </ScrollView>
      <View style={{ marginHorizontal: 30, marginTop: 15, marginBottom: 15 }}>
        <Button title="Add items" onPress={setPlaceholderData} />
      </View>
    </>
  );
};

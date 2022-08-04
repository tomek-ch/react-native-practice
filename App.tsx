import { StatusBar } from "expo-status-bar";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { AddToDo } from "./components/AddToDo";
import { ToDoItem } from "./components/ToDoItem";
import { useToDos } from "./hooks/useToDos";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSplashScreen } from "./hooks/useSplashScreen";
import { useTheme } from "./hooks/useTheme";
import { useBackgroundColor } from "./hooks/useBackgroundColor";

export default function App() {
  const { toDos, createToDo, removeToDo, setPlaceholderData } = useToDos();
  const { appIsReady, onLayoutRootView } = useSplashScreen();

  const theme = useTheme();
  useBackgroundColor();

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView
      style={[styles.container, styles[`${theme}Container`]]}
      onLayout={onLayoutRootView}
    >
      <AddToDo handleAdd={createToDo} />
      <FlatList
        data={toDos}
        renderItem={({ item, index }) => (
          <ToDoItem
            toDo={item}
            remove={removeToDo}
            style={{ marginTop: !index ? 20 : 0 }}
          />
        )}
      />
      <View style={{ margin: 30, marginTop: 15 }}>
        <Button title="Add items" onPress={setPlaceholderData} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    overflow: "visible",
  },
  lightContainer: {
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#000",
  },
});

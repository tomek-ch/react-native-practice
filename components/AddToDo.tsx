import { useEffect, useRef, useState } from "react";
import { Keyboard, LayoutAnimation, TextInput } from "react-native";

type AddToDoProps = {
  handleAdd: (text: string) => void;
};

export const AddToDo = ({ handleAdd }: AddToDoProps) => {
  const [text, setText] = useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    const subscription = Keyboard.addListener("keyboardDidHide", () =>
      inputRef.current?.blur()
    );
    return subscription.remove;
  }, []);

  const handleSubmit = () => {
    handleAdd(text);
    setText("");
  };

  return (
    <TextInput
      onSubmitEditing={handleSubmit}
      value={text}
      onChangeText={setText}
      placeholder="New item"
      ref={inputRef}
      style={{
        backgroundColor: "#eee",
        borderRadius: 10,
        padding: 20,
        paddingVertical: 10,
        marginHorizontal: 20,
        marginVertical: 10,
      }}
    />
  );
};

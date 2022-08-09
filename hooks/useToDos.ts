import { useState } from "react";
import { getId } from "../utils/getId";

export type ToDo = {
  text: string;
  id: number;
  done: boolean;
};

const placeholderData = [
  { text: "hello world", id: -1, done: false },
  { text: "hi there", id: -2, done: false },
  { text: "sup", id: -3, done: false },
  { text: "hello world", id: -4, done: false },
  { text: "hi there", id: -5, done: false },
  { text: "sup", id: -6, done: false },
  { text: "hello world", id: -7, done: false },
  { text: "hi there", id: -8, done: false },
  { text: "sup", id: -9, done: false },
];

export const useToDos = () => {
  const [toDos, setToDos] = useState<ToDo[]>(placeholderData);

  const createToDo = (text: string) => {
    setToDos((prev) => [{ id: getId(), text, done: false }, ...prev]);
  };

  const removeToDo = (id: number) => {
    setToDos((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleDone = (id: number) => {
    setToDos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const editText = (id: number, newText: string) => {
    setToDos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  };

  const setPlaceholderData = () => setToDos(placeholderData);

  return {
    toDos,
    createToDo,
    removeToDo,
    toggleDone,
    editText,
    setPlaceholderData,
  };
};

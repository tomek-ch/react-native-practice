import { Text } from "react-native";
import { ScreenProps } from "../App";
import { useToDosContext } from "../context/ToDosContext";

type DetailsProps = ScreenProps<"Details">;

export const Details = ({
  route: {
    params: { id },
  },
}: DetailsProps) => {
  const { toDos } = useToDosContext();
  const toDo = toDos.find((item) => item.id === id);

  if (!toDo) {
    return <Text style={{ padding: 20, fontSize: 20 }}>Not found</Text>;
  }

  return <Text style={{ padding: 20, fontSize: 20 }}>{toDo.text}</Text>;
};

import { Text } from "react-native";
import { ScreenProps } from "../App";
import { useToDosContext } from "../context/ToDosContext";

type DetailsProps = ScreenProps<"Details">;

export const Details = ({
  route: {
    params: { id },
  },
}: DetailsProps) => {
  const { getById } = useToDosContext();
  const toDo = getById(id);

  return (
    <Text style={{ padding: 20, fontSize: 20, marginTop: 60 }}>
      {toDo?.text || "Not found"}
    </Text>
  );
};

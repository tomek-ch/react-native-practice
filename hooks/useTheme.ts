import { useColorScheme } from "react-native";

export const useTheme = () => {
  return useColorScheme() || "light";
};

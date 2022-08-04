import { setBackgroundColorAsync } from "expo-system-ui";
import { useEffect } from "react";
import { useTheme } from "./useTheme";

export const useBackgroundColor = () => {
  const theme = useTheme();

  useEffect(() => {
    setBackgroundColorAsync(theme === "light" ? "#fff" : "#000");
  }, [theme]);
};

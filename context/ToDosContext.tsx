import { createContext, ReactNode, useContext } from "react";
import { useToDos } from "../hooks/useToDos";

type ToDosContext = ReturnType<typeof useToDos>;
const Context = createContext({} as ToDosContext);

export const ToDosContextProvider = ({ children }: { children: ReactNode }) => (
  <Context.Provider value={useToDos()}>{children}</Context.Provider>
);

export const useToDosContext = () => useContext(Context);

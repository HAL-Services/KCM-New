import { createContext, useEffect, useReduer } from "react";
import Reducer from "./Reducer";
const INITIAL_STATE = {};
export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

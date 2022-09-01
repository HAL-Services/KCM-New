import { createContext, useReducer } from "react";
import AuthReducer from "./Reducer";
// initial state
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("authToken")) || null,
  isFetching: false,
  error: false,
};
// creating context
export const Context = createContext(INITIAL_STATE);

// context provider
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

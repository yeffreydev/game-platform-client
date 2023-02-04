import initialState from "./initialState";
import AppReducer from "./appReducer";
import AppContext from "./AppContext";
import { ReactNode, useReducer } from "react";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return <AppContext.Provider value={{ ...state, dispatch }}>{children}</AppContext.Provider>;
};

export default AppProvider;

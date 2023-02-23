import initialState from "./initialState";
import AppReducer from "./appReducer";
import AppContext from "./AppContext";
import { ReactNode, useEffect, useReducer } from "react";
import { getUserTokenFromLocalStorage } from "../utils/auth";
import { addUserAuth } from "./appActions";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    //auth user
    const user = getUserTokenFromLocalStorage();
    addUserAuth(user, dispatch);
  }, []);
  return <AppContext.Provider value={{ ...state, dispatch }}>{children}</AppContext.Provider>;
};

export default AppProvider;

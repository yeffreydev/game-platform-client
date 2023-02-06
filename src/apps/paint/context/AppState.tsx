import AppContext from "./AppContext";
import { ReactNode, useReducer } from "react";
import paintReducer from "./appReducer";
import initialState from "./initialSate";
//socket io
import { io, Socket } from "socket.io-client";
const paintSocket: Socket = io("http://localhost:4000", { path: "/paint" });

export default function AppState({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(paintReducer, initialState);

  return <AppContext.Provider value={{ ...state, paintSocket, dispatch }}>{children}</AppContext.Provider>;
}

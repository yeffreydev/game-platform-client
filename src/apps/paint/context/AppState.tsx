import AppContext from "./AppContext";
import { ReactNode, useEffect, useReducer } from "react";
import paintReducer from "./appReducer";
import initialState from "./initialSate";
//socket io
import { io, Socket } from "socket.io-client";
const paintSocket: Socket = io("http://192.168.43.123:4000", { path: "/paint" });

export default function AppState({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(paintReducer, initialState);
  useEffect(() => {
    paintSocket.on("connect", () => {
      console.log("connected to paint socket");
    });
    paintSocket.on("disconnect", () => {
      console.log("disconnected from paint socket");
    });
  }, []);

  return <AppContext.Provider value={{ ...state, paintSocket, dispatch }}>{children}</AppContext.Provider>;
}

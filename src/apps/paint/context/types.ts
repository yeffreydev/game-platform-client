import { Socket } from "socket.io-client";
export enum ActionTypes {
  SET_COLOR = "SET_COLOR",
}

export interface IAction<T> {
  type: ActionTypes;
  payload: T;
}

export interface IAppState {
  dispatch: React.Dispatch<IAction<string>>;
  currentColor: string;
  paintSocket: Socket | null;
}

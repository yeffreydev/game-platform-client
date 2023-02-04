import { Dispatch } from "react";
export enum ActionTypes {
  ADD = "ADD",
}

export interface IAction<T> {
  type: ActionTypes;
  payload?: T;
}

export interface IAppState {
  count: number;
  dispatch: Dispatch<IAction<number>>;
}

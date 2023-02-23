import { Dispatch } from "react";
import { IUserAuth } from "../types/user";
export enum ActionTypes {
  ADD = "ADD",
  "ADD_USER_AUTH" = "ADD_USER_AUTH",
  "REMOVE_USER_AUTH" = "REMOVE_USER_AUTH",
}

export interface IAction<T> {
  type: ActionTypes;
  payload?: T;
}

export interface IAppState {
  count: number;
  userAuth: IUserAuth;
  dispatch: Dispatch<IAction<number | IUserAuth>>;
}

import { Dispatch } from "react";
import { IUserAuth } from "../types/user";
export enum ActionTypes {
  ADD = "ADD",
  "ADD_USER_AUTH" = "ADD_USER_AUTH",
  "REMOVE_USER_AUTH" = "REMOVE_USER_AUTH",
  "HANDLE_CONDITIONAL_VIEW" = "HANDLE_CONDITIONAL_VIEW",
}

export interface IAction<T> {
  type: ActionTypes;
  payload?: T;
}
export interface IconditionalView {
  isOn: boolean;
}

export interface IConditionalViews {
  [key: string]: IconditionalView;
}
export interface IAppState {
  count: number;
  userAuth: IUserAuth;
  dispatch: Dispatch<IAction<number | IUserAuth | string>>;
  conditionalViews: IConditionalViews;
}

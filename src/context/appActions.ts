import { Dispatch } from "react";
import { IUserAuth } from "../types/user";
import { IAction, ActionTypes } from "./types";

export const addCount = (dispatch: Dispatch<IAction<number>>) => {
  dispatch({ type: ActionTypes.ADD });
};

export const addUserAuth = (userAuth: IUserAuth, dispatch: Dispatch<IAction<IUserAuth>>) => {
  dispatch({ type: ActionTypes.ADD_USER_AUTH, payload: userAuth });
};

export const removeUserAuth = (dispatch: Dispatch<IAction<IUserAuth>>) => {
  dispatch({ type: ActionTypes.REMOVE_USER_AUTH });
};

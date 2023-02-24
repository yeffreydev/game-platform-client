import { Dispatch } from "react";
import { IUserAuth } from "../types/user";
import { IAction, ActionTypes, IconditionalView, IConditionalViews } from "./types";

export const addCount = (dispatch: Dispatch<IAction<number>>) => {
  dispatch({ type: ActionTypes.ADD });
};

export const addUserAuth = (userAuth: IUserAuth, dispatch: Dispatch<IAction<IUserAuth>>) => {
  dispatch({ type: ActionTypes.ADD_USER_AUTH, payload: userAuth });
};

export const removeUserAuth = (dispatch: Dispatch<IAction<IUserAuth>>) => {
  dispatch({ type: ActionTypes.REMOVE_USER_AUTH });
};

//handle conditional views
export const handleConditionalView = (component: string, dispatch: Dispatch<IAction<string>>) => {
  dispatch({
    type: ActionTypes.HANDLE_CONDITIONAL_VIEW,
    payload: component,
  });
};

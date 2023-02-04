import { Dispatch } from "react";
import { IAction, ActionTypes } from "./types";

export const addCount = (dispatch: Dispatch<IAction<number>>) => {
  dispatch({ type: ActionTypes.ADD });
};

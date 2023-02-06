import { Dispatch } from "react";
import * as paintTypes from "./types";

export const setColor = (color: string, dispatch: Dispatch<paintTypes.IAction<string>>) => {
  dispatch({
    type: paintTypes.ActionTypes.SET_COLOR,
    payload: color,
  });
};

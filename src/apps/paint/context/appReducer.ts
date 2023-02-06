import * as paintTypes from "./types";

const paintReducer = (state: paintTypes.IAppState, action: paintTypes.IAction<string>) => {
  switch (action.type) {
    case paintTypes.ActionTypes.SET_COLOR:
      return { ...state, currentColor: action.payload };
    default:
      return state;
  }
};

export default paintReducer;

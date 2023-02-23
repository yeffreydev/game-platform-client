import { IUserAuth } from "../types/user";
import { IAppState, IAction, ActionTypes } from "./types";

const AppReducer = (state: IAppState, action: IAction<number | IUserAuth>): IAppState => {
  switch (action.type) {
    case ActionTypes.ADD: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case ActionTypes.ADD_USER_AUTH: {
      return {
        ...state,
        userAuth: action.payload as IUserAuth,
      };
    }
    case ActionTypes.REMOVE_USER_AUTH: {
      return {
        ...state,
        userAuth: { token: "", auth: false },
      };
    }
    default:
      return state;
  }
};

export default AppReducer;

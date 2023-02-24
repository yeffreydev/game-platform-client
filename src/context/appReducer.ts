import { IUserAuth } from "../types/user";
import { IAppState, IAction, ActionTypes } from "./types";

const AppReducer = (state: IAppState, action: IAction<number | IUserAuth | string>): IAppState => {
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
    case ActionTypes.HANDLE_CONDITIONAL_VIEW: {
      return {
        ...state,
        conditionalViews: {
          ...state.conditionalViews,
          [action.payload as string]: {
            isOn: !state.conditionalViews[action.payload as string].isOn,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default AppReducer;

import { IAppState, IAction } from "./types";

const AppReducer = (state: IAppState, action: IAction<number>): IAppState => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default:
      return state;
  }
};

export default AppReducer;

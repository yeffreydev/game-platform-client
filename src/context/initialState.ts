import { IAppState } from "./types";

const initialState: IAppState = {
  count: 0,
  userAuth: { token: "", auth: false },
  dispatch: () => {},
  conditionalViews: {
    AppsModal: {
      isOn: false,
    },
  },
};
export default initialState;

import { IAppState } from "./types";

const initialState: IAppState = {
  count: 0,
  userAuth: { token: "", auth: false },
  dispatch: () => {},
};
export default initialState;

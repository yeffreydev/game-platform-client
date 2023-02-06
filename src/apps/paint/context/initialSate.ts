import * as paintTypes from "./types";

const initialState: paintTypes.IAppState = {
  dispatch: () => {},
  currentColor: "black",
  paintSocket: null,
};

export default initialState;

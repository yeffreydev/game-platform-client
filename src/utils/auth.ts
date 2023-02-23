import { IUserAuth } from "../types/user";

export const saveUserTokenInLocalStorage = (userAuth: IUserAuth) => {
  localStorage.setItem("user", JSON.stringify(userAuth));
};

export const getUserTokenFromLocalStorage = (): IUserAuth => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : { token: "", auth: false };
};

export const removeUserTokenFromLocalStorage = () => {
  localStorage.removeItem("user");
};

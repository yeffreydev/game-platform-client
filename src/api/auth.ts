import { ILoginForm } from "../components/signIn/Login";
import { IRegisterForm } from "../components/signIn/Register";
import config from "../config";

const authApi = config.host + "/api/auth";

export const loginUser = async (user: ILoginForm) => {
  const res = await fetch(`${authApi}/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  });
  return {
    status: res.status,
    data: await res.json(),
  };
};

export const registerUser = async (user: IRegisterForm) => {
  const res = await fetch(`${authApi}/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  });
  return {
    status: res.status,
    data: await res.json(),
  };
};

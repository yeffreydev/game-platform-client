import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../api/auth";
import { addUserAuth } from "../../context/appActions";
import AppContext from "../../context/AppContext";
import { saveUserTokenInLocalStorage } from "../../utils/auth";
import loginStyles from "./../../styles/signIn/Login.module.css";
import { ILoginForm } from "./Login";

export interface IRegisterForm extends ILoginForm {
  email: string;
}

const initialState: IRegisterForm = {
  email: "",
  username: "",
  password: "",
};

const Register = () => {
  const [registerForm, setRegisterForm] = React.useState<IRegisterForm>(initialState);
  const { userAuth, dispatch } = useContext(AppContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { status, data } = await registerUser(registerForm);
    if (status !== 200) {
      return alert("email or username already exists");
    }
    saveUserTokenInLocalStorage(data.user);
    addUserAuth(data.user, dispatch);
  };

  useEffect(() => {
    if (userAuth.auth) {
      window.location.href = "/";
    }
  }, [userAuth]);

  return (
    <form className={loginStyles.form} onSubmit={handleSubmit}>
      <div className={loginStyles.form_header}>
        <h2> create an account</h2>
        <p>more time with your friends.</p>
      </div>
      <div className={loginStyles.form_group}>
        <label htmlFor="">email</label>
        <input placeholder="email" name="email" type="text" onChange={handleChange} autoComplete={"off"} />
      </div>
      <div className={loginStyles.form_group}>
        <label htmlFor=""> username</label>
        <input placeholder="username" name="username" type="text" onChange={handleChange} autoComplete={"off"} />
      </div>
      <div className={loginStyles.form_group}>
        <label htmlFor="">password</label>
        <input placeholder="password" name="password" type="text" onChange={handleChange} autoComplete={"off"} />
      </div>
      <div className={`${loginStyles.form_group} ${loginStyles.terms}`}>
        <input type={"checkbox"} />
        <label htmlFor="">terms of service and privacy policy</label>
      </div>
      <div className={loginStyles.form_group}>
        <button type="submit">Register</button>
      </div>
      <div className={loginStyles.form_footer}>
        <p>
          already have an Account?{" "}
          <b>
            <Link to="/login">Login</Link>
          </b>
        </p>
      </div>
    </form>
  );
};

export default Register;

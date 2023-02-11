import React from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../api/auth";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { status, data } = await registerUser(registerForm);
    if (status === 200) {
      //setUser({token: data.token, auth: true})
    }
  };

  return (
    <form className={loginStyles.login} onSubmit={handleSubmit}>
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
        <p>
          {" "}
          <input type={"checkbox"} />
          terms of service and privacy policy
        </p>
      </div>
    </form>
  );
};

export default Register;

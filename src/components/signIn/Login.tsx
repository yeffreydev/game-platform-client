import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../api/auth";
import styles from "./../../styles/signIn/Login.module.css";

export interface ILoginForm {
  username: string;
  password: string;
}

const initialState: ILoginForm = {
  username: "",
  password: "",
};

const Login = () => {
  const [loginForm, setLoginForm] = React.useState<ILoginForm>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { status, data } = await loginUser(loginForm);
    console.log({ status, data });
  };

  return (
    <form className={styles.login} onSubmit={handleSubmit}>
      <div className={styles.form_header}>
        <h2>Welcome back</h2>
        <p>you and me.</p>
      </div>
      <div className={styles.form_group}>
        <label htmlFor="username"> username </label>
        <input placeholder="username or email" name="username" onChange={handleChange} type="text" autoComplete="off" />
      </div>
      <div className={styles.form_group}>
        <label htmlFor="password">password</label>
        <input placeholder="password" name="password" onChange={handleChange} type="text" autoComplete="off" />
      </div>
      <div className={styles.form_group}>
        <button type="submit">Login</button>
      </div>
      <div className={styles.form_footer}>
        <p>
          Need an Account?{" "}
          <b>
            <Link to="/register">Register</Link>
          </b>
        </p>
      </div>
    </form>
  );
};

export default Login;

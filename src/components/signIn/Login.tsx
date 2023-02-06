import React from "react";
import styles from "./../../styles/signIn/Login.module.css";
const Login = () => {
  return (
    <form className={styles.login}>
      <div className={styles.form_header}>
        <h2>Welcome back</h2>
        <p>you and me.</p>
      </div>
      <div className={styles.form_group}>
        <label htmlFor=""> email</label>
        <input type="text" />
      </div>
      <div className={styles.form_group}>
        <label htmlFor="">password</label>
        <input type="text" />
      </div>
      <div className={styles.form_group}>
        <button type="submit">Login</button>
      </div>
      <div className={styles.form_footer}>
        <p>
          Need an Account? <b>Register</b>
        </p>
      </div>
    </form>
  );
};

export default Login;

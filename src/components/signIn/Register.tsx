import React from "react";
import loginStyles from "./../../styles/signIn/Login.module.css";
const Register = () => {
  return (
    <form className={loginStyles.login}>
      <div className={loginStyles.form_header}>
        <h2> create an account</h2>
        <p>more time with your friends.</p>
      </div>
      <div className={loginStyles.form_group}>
        <label htmlFor=""> email</label>
        <input type="text" />
      </div>
      <div className={loginStyles.form_group}>
        <label htmlFor=""> username</label>
        <input type="text" />
      </div>
      <div className={loginStyles.form_group}>
        <label htmlFor="">password</label>
        <input type="text" />
      </div>
      <div className={loginStyles.form_group}>
        <button type="submit">Register</button>
      </div>
      <div className={loginStyles.form_footer}>
        <p>
          already have an Account? <b>Login</b>
        </p>
        <p>terms of service and privacy policy</p>
      </div>
    </form>
  );
};

export default Register;

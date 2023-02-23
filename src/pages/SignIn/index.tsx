import { useContext, useEffect, useState } from "react";
import Login from "../../components/signIn/Login";
import { useLocation } from "react-router-dom";
import Register from "../../components/signIn/Register";
import styles from "./../../styles/signIn/styles.module.css";
import AppContext from "../../context/AppContext";
const SignIn = () => {
  const location = useLocation();
  const [component, setComponent] = useState("");
  const { userAuth } = useContext(AppContext);
  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setComponent(path);
  }, [location.pathname]);
  useEffect(() => {
    if (userAuth.auth) {
      window.location.href = "/";
    }
  }, [userAuth]);
  return <>{!userAuth.auth ? <div className={styles.signIn}>{component === "login" ? <Login /> : <Register />}</div> : null}</>;
};

export default SignIn;

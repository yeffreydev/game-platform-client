import { useEffect, useState } from "react";
import Login from "../../components/signIn/Login";
import { useLocation } from "react-router-dom";
import Register from "../../components/signIn/Register";
import styles from "./../../styles/signIn/styles.module.css";
const SignIn = () => {
  const location = useLocation();
  const [component, setComponent] = useState("");
  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setComponent(path);
  }, [location.pathname]);
  return <div className={styles.signIn}>{component === "login" ? <Login /> : <Register />}</div>;
};

export default SignIn;

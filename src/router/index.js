import { Routes, Route } from "react-router-dom";
import SignIn from "./../pages/SignIn";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" component={<SignIn />} />
      <Route path="/register" component={<SignIn />} />
    </Routes>
  );
};

export default Router;

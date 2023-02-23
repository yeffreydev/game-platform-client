import { Routes, Route } from "react-router-dom";
import SignIn from "./../pages/SignIn";
import Home from "../pages/Home";
import Header from "../components/Header";
import PaintApp from "./../apps/paint/App";
import Account from "../pages/account";
const Router = () => {
  return (
    <>
      <Routes>
        {["/", "/login", "/register"].map((path, index) => (
          <Route path={path} element={<Header />} key={index} />
        ))}
      </Routes>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/paint/*" element={<PaintApp />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
};

export default Router;

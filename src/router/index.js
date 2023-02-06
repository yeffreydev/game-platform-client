import { Routes, Route } from "react-router-dom";
import SignIn from "./../pages/SignIn";
import Home from "../pages/Home";
import PaintApp from "./../apps/paint/App";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/paint/*" element={<PaintApp />} />
      </Routes>
    </>
  );
};

export default Router;

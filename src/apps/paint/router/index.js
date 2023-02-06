import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
export default function PaintRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="new" element={<h4>New</h4>} />
    </Routes>
  );
}

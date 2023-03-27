import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NewPaint from "../pages/new";
export default function PaintRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="new" element={<NewPaint />} />
    </Routes>
  );
}

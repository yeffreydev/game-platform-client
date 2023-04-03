import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import PaintPage from "../pages/paint";
import NewPaint from "../pages/new";
export default function PaintRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="edit/:id" element={<PaintPage />} />
      <Route path="new" element={<NewPaint />} />
    </Routes>
  );
}

import React from "react";
import PaintRoutes from "./router";
import PaintState from "./context/AppState";
const PaintApp = () => {
  return (
    <div>
      <ul>
        <li>paint li</li>
      </ul>
      <PaintState>
        <PaintRoutes />
      </PaintState>
    </div>
  );
};
export default PaintApp;

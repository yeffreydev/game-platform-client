import React from "react";
import PaintRoutes from "./router";
import PaintState from "./context/AppState";
import PaintHeader from "./components/home/PaintHeader";
const PaintApp = () => {
  return (
    <div>
      <PaintHeader />
      <PaintState>
        <div className="p-1 mx-auto w-ful md:w-9/12 lg:w-8/12">
          <PaintRoutes />
        </div>
      </PaintState>
    </div>
  );
};
export default PaintApp;

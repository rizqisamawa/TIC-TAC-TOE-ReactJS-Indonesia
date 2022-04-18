import React from "react";
import Papan from "./komponen/Papan";

function App() {
  return (
    <div className="">
      {/* header */}
      <p className="fs-1 fw-bolder text-center text-primary">
        TIC TAC KENTUE
        <span className="fs-6 fw-light text-dark">
          <a href="0" className="text-docoration-none">
            Rizqi Samawa
          </a>
        </span>
      </p>
      {/* header */}
      <hr className="hori" />
      <Papan />
    </div>
  );
}

export default App;

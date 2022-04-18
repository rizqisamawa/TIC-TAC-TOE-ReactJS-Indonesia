import React from "react";

function Persegi(props) {
  return (
    <div className="bg-light">
      <button
        className="kotak btn-outline-primary fw-bold"
        onClick={() => props.onClick()}
      >
        {props.value}
      </button>
    </div>
  );
}

export default Persegi;

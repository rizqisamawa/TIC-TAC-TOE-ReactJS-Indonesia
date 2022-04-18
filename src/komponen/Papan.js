import React, { useState } from "react";
import Persegi from "./Persegi";

function Papan() {
  const [persegi, setPersegi] = useState(Array(9).fill(null));
  const [X, setX] = useState(true);

  const menang = aturanMenang(persegi);
  let status;
  if (menang) {
    status = "Pemenang adalah si : " + menang;
  } else {
    status = "Giliran Anda : " + (X ? "X" : "O");
  }

  const renderPersegi = (val) => {
    return <Persegi value={persegi[val]} onClick={() => handleClick(val)} />;
  };

  const handleClick = (val) => {
    const kotak = persegi.slice();

    if (kotak[val] === null) {
      kotak[val] = X ? "X" : "O";
      setPersegi(kotak);
      setX(!X);
    } else {
      alert("TAU ATURAN MAEN GA BLOK");
    }
  };

  function aturanMenang(persegi) {
    const garis = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
    ];

    for (let i = 0; i < garis.length; i++) {
      const [a, b, c] = garis[i];
      if (
        persegi[a] &&
        persegi[a] === persegi[b] &&
        persegi[a] === persegi[c]
      ) {
        return persegi[a];
      }
    }
    return null;
  }

  return (
    <div className="">
      <div className="d-flex  justify-content-center">
        {renderPersegi(0)}
        {renderPersegi(1)}
        {renderPersegi(2)}
      </div>
      <div className="d-flex  justify-content-center">
        {renderPersegi(3)}
        {renderPersegi(4)}
        {renderPersegi(5)}
      </div>
      <div className="d-flex  justify-content-center">
        {renderPersegi(6)}
        {renderPersegi(7)}
        {renderPersegi(8)}
      </div>
      <div className="text-center mt-3 d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={function () {
            document.location.reload(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-clockwise"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
            ></path>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"></path>
          </svg>
        </button>
        <h3 className="fw-bold text-primary ms-3">{status}</h3>
      </div>
    </div>
  );
}

export default Papan;

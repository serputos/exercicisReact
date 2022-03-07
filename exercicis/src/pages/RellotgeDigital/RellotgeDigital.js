import { useState, useEffect } from "react";
import "./RellotgeDigital.css";

function HoraActual() {
  return new Date();
}

function RellotgeDigital() {
  const [displayHora, setDisplayHora] = useState(HoraActual());
  const [view, setView] = useState("mostrarData");

  function viewDate() {
    setView("noMostrarData");
    if (view === "noMostrarData") {
      setView("mostrarData");
    }
  }
  function ActualizarHora() {
    setDisplayHora(HoraActual());
  }

  useEffect(() => {
    const timerRefresh = setInterval(ActualizarHora, 1000);
    return function cleanup() {
      clearInterval(timerRefresh);
    };
  }, []);
  return (
    <div className="AppRellotge">
      <div className="DisplayRellotge">
        <>
          <p>{displayHora.toLocaleString().slice(10, 19)}</p>
          <p className={view}>{displayHora.toLocaleString().slice(0, 9)}</p>
          <button onClick={() => viewDate()}>Mostrar/Ocultar FECHA</button>
        </>
      </div>
    </div>
  );
}

export default RellotgeDigital;

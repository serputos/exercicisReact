import { useState, useEffect } from "react";
import "./RellotgeAnalogic.css";

function HoraActual() {
  return new Date();
}

function RellotgeAnalogic() {
  const [displayHora, setDisplayHora] = useState(HoraActual());

  function ActualizarHora() {
    setDisplayHora(HoraActual());
  }

  useEffect(() => {
    setInterval(ActualizarHora, 1000);
  }, []);

  return (
    <div className="AppRellotgeAnalogic">
      <div className="DisplayRellotgeAnalogic">
        <div className="circulo">
          <div
            className="hora"
            style={{
              transform: `rotate(${
                displayHora.getHours() * 30 + displayHora.getMinutes() / 2
              }deg)`,
            }}
          ></div>
          <div
            className="sec"
            style={{
              transform: `rotate(${displayHora.getSeconds() * 6}deg)`,
            }}
          ></div>
          <div
            className="min"
            style={{
              transform: `rotate(${displayHora.getMinutes() * 6}deg)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default RellotgeAnalogic;

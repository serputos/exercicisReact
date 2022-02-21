import "./Comptador.css";
import { useState } from "react";

const numeros = ["+1", "-1", "+5"];

function Comptador() {
  const [display, setDisplay] = useState(0);

  const entraOperacio = (valor) => {
    if (valor === "+1" && display !== 10) {
      setDisplay(display + 1);
    } else if (valor === "-1" && display !== 0) {
      setDisplay(display - 1);
    } else if (valor === "+5" && display < 6) {
      setDisplay(display + 5);
    }
  };

  return (
    <div className="App">
      <div className="Display">{display}</div>
      {numeros.map((valor) => (
        <button onClick={() => entraOperacio(valor)}>{valor}</button>
      ))}
    </div>
  );
}

export default Comptador;

import { useState } from "react";
import "./TresEnRatlla.css";

function TresEnRatlla() {
  const [array, setArray] = useState([
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
  ]);

  const [value, setValue] = useState(true);
  const [win, setWin] = useState(false);
  const [texto, setTexto] = useState(null);

  let copia = [...array];

  const ChangeValue = (i) => {
    if (array.includes("-") === false) {
      setTexto("EMPATE");
      setWin(true);
    }
    if (copia[i] === "-" && value === true) {
      copia[i] = "X";
      setArray(copia);
      setValue(false);
    } else if (copia[i] === "-" && value === false) {
      copia[i] = "O";
      setArray(copia);
      setValue(true);
    }
    checkEnd();
    //getGuanyador();

    Reinico();
  };
  const Reinico = () => {
    if (win === true) {
      document.location.reload(true);
    }
  };

  const checkEnd = () => {
    if (copia[0] === copia[1] && copia[1] === copia[2] && copia[0] !== "-") {
      setWin(true);
      setTexto("Las " + copia[0] + " han ganado");
    }
    if (copia[3] === copia[4] && copia[4] === copia[5] && copia[3] !== "-") {
      setWin(true);
      setTexto("Las " + copia[3] + " han ganado");
    }
    if (copia[6] === copia[7] && copia[7] === copia[8] && copia[6] !== "-") {
      setWin(true);
      setTexto("Las " + copia[6] + " han ganado");
    }
    if (copia[0] === copia[3] && copia[3] === copia[6] && copia[0] !== "-") {
      setWin(true);
      setTexto("Las " + copia[0] + " han ganado");
    }
    if (copia[1] === copia[4] && copia[4] === copia[7] && copia[1] !== "-") {
      setWin(true);
      setTexto("Las " + copia[1] + " han ganado");
    }
    if (copia[2] === copia[5] && copia[5] === copia[8] && copia[2] !== "-") {
      setWin(true);
      setTexto("Las " + copia[2] + " han ganado");
    }
    if (copia[0] === copia[4] && copia[4] === copia[8] && copia[0] !== "-") {
      setWin(true);
      setTexto("Las " + copia[0] + " han ganado");
    }
    if (copia[2] === copia[4] && copia[4] === copia[6] && copia[2] !== "-") {
      setWin(true);
      setTexto("Las " + copia[2] + " han ganado");
    }
  };

  return (
    <div className="App">
      <div className="DisplayTres">
        <div>
          {array.map((boto, i) => (
            <button
              className={
                boto === "X" ? "botoX" : boto === "O" ? "botoO" : "boto"
              }
              onClick={() => ChangeValue(i)}
            >
              {array[i]}
            </button>
          ))}
        </div>
        <h1>{texto}</h1>
      </div>
    </div>
  );
}

export default TresEnRatlla;

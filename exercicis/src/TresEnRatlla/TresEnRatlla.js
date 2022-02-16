import { useState } from "react";
import "./TresEnRatlla.css";

function TresEnRatlla() {
  let array = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

  const [print, setPrint] = useState([
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

  const ChangeValue = (index) => {
    let copia = [...array];

    if (print === "-") {
      copia[index] = "X";
      setPrint(copia[index]);
    } else {
    }
  };

  return (
    <div className="App">
      <div className="DisplayTres">
        <div className="BotonsBox">
          {array.map((boto, i) => (
            <button className="Boto" onClick={ChangeValue}>
              {boto}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TresEnRatlla;

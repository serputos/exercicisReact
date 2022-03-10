import { useState } from "react";
import "./Acordio.css";

const titolsArray = [
  { Titol: "Títol 1", Contingut: "Contingut" },
  { Titol: "Títol 2", Contingut: "Contingut" },
  { Titol: "Títol 3", Contingut: "Contingut" },
  { Titol: "Títol 4", Contingut: "Contingut" },
  { Titol: "Títol 5", Contingut: "Contingut" },
];

function Acordio() {
  const [titolSelect, setTitolSelect] = useState(null);
  const [mostra, setMostra] = useState(true);

  const mostraContingut = (i) => {
    setTitolSelect(titolsArray.indexOf(i));

    if (titolSelect === titolsArray.indexOf(i)) {
      setTitolSelect(null);
    }
  };

  return (
    <div className="App">
      <div className="DisplayAcordio">
        {titolsArray.map((titol, i) => (
          <>
            <h1 onClick={() => mostraContingut(titol)}>{titol.Titol}</h1>
            <h2
              className={
                i === titolSelect
                  ? "mostras"
                  : i !== titolSelect
                  ? "noMostra"
                  : "mostras"
              }
            >
              {titol.Contingut + " " + (i + 1)}
            </h2>
          </>
        ))}
      </div>
    </div>
  );
}

export default Acordio;

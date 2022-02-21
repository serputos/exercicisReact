import "./Galeria.css";
import { useState } from "react";

function Galeria() {
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  const fotos = [
    "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",

    "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",

    "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  ];
  const fullScreen = (i) => {
    setFotoSeleccionada(i);

    if (fotoSeleccionada === i) {
      setFotoSeleccionada(null);
    }
  };

  return (
    <div className="App">
      <div className="box">
        {fotos.map((foto, i) => (
          <img
            key={i}
            className={i === fotoSeleccionada ? "fotoGran" : "fotoPetita"}
            alt="dsa"
            src={foto}
            onClick={() => fullScreen(i)}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Galeria;

import "./Galeria.css";
import { useReducer, useState } from "react";
import { reducer, Fotogran, FotoPetita } from "./Zoom";
function Galeria() {
  // const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
  const [fotoSeleccionada, dispatch] = useReducer((state, input) => {
    if (state === input) {
      return null;
    } else {
      return input;
    }
  }, 0);

  /* const fullScreen = (i) => {
    setFotoSeleccionada(i);

    if (fotoSeleccionada === i) {
      setFotoSeleccionada(null);
    }
  };*/
  const fullScreen = (i) => {
    dispatch(i);
  };

  const fotos = [
    "https://www.ngenespanol.com/wp-content/uploads/2018/09/Fotos-Divertidas-del-mundo-animal-P-770x513.png",
    "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",

    "https://www.ngenespanol.com/wp-content/uploads/2018/09/Fotos-Divertidas-del-mundo-animal-1.png",
    "https://www.ngenespanol.com/wp-content/uploads/2018/09/Fotos-Divertidas-del-mundo-animal-2.png",
  ];

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

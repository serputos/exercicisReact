import { useState } from "react";
import "./Carrusel.css";

function Carrusel() {
  const fotos = [
    "https://www.ngenespanol.com/wp-content/uploads/2018/09/Fotos-Divertidas-del-mundo-animal-P-770x513.png",
    "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",

    "https://www.ngenespanol.com/wp-content/uploads/2018/09/Fotos-Divertidas-del-mundo-animal-1.png",
    "https://www.ngenespanol.com/wp-content/uploads/2018/09/Fotos-Divertidas-del-mundo-animal-2.png",
  ];
  const imgButtons = ["1", "2", "3", "4"];

  const [fotoPantalla, setFotoPantalla] = useState(0);

  const nextFoto = () => {
    if (fotoPantalla === 3) {
      setFotoPantalla(0);
    } else {
      setFotoPantalla(fotoPantalla + 1);
    }
  };
  const beforeFoto = (i) => {
    if (fotoPantalla === 0) {
      setFotoPantalla(3);
    } else {
      setFotoPantalla(fotoPantalla - 1);
    }
  };
  const fotoByButton = (i) => {
    setFotoPantalla(i);
  };

  return (
    <div className="Carrusel">
      <div className="Display">
        <>
          <button onClick={beforeFoto}>BEFORE</button>
        </>

        {fotos.map((foto, i) => (
          <>
            <img
              key={i}
              className={i === fotoPantalla ? "mostra" : "noMostra"}
              alt="sa"
              src={foto}
            ></img>
          </>
        ))}
        <>
          <button onClick={nextFoto}>NEXT</button>
        </>
      </div>
      <div>
        {imgButtons.map((boto, i) => (
          <button onClick={() => fotoByButton(i)}>{boto}</button>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;

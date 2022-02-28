import { useState } from "react";

function Exercici3() {
  let vector = [1, 2, 2, 4, 2, 6, 7, 2, 9, 10];
  let doOnce = false;

  const [newArray, setNewArray] = useState(vector);
  function Inicio() {
    let uniqueChars = vector.filter((element, index) => {
      return vector.indexOf(element) === index;
    });

    setNewArray(uniqueChars);
  }

  return (
    <div className="App">
      <div className="DisplayExercici3">
        <div>
          <p>{newArray}</p>
        </div>
        <button onClick={Inicio}>Eliminar Repetidos</button>
      </div>
    </div>
  );
}
export default Exercici3;

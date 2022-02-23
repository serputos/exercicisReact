import { useState } from "react";

const vector = [1, 2, 2, 4, 2, 6, 7, 2, 9, 10];

function Exercici4() {
  const [newArray, setNewArray] = useState(vector);

  function miraRepetidos() {
    newArray.forEach(() => {
      let dupNumbers = newArray.filter((value, index) => {
        return newArray.indexOf(value) !== index;
      });
      setNewArray(dupNumbers);
    });
  }

  return (
    <div className="App">
      <div className="DisplayExercici4">
        <button onClick={miraRepetidos}>Eliminar Repetidos</button>
        <div>
          {newArray.map((entry) => (
            <div>{entry}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Exercici4;

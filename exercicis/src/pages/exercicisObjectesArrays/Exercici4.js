import { useState } from "react";

const vector = [1, 2, 2, 4, 2, 6, 7, 2, 9, 10];
let doOnce = false;

function Exercici4() {
  const [newArray, setNewArray] = useState(vector);

  function miraNoRepetidos() {
    console.log(doOnce);
    if (!doOnce) {
      newArray.forEach(() => {
        let dupNumbers = newArray.filter((value, index) => {
          return newArray.indexOf(value) !== index;
        });
        doOnce = true;
        setNewArray(dupNumbers);
      });
    } else {
      setNewArray(vector);
      doOnce = false;
    }
  }

  return (
    <div className="App">
      <div className="DisplayExercici4">
        <button onClick={miraNoRepetidos}>Eliminar NO Repetidos</button>
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

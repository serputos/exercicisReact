import { useState } from "react";

function Exercici3() {
  let vector = [1, 2, 2, 4, 2, 6, 7, 2, 9, 10];

  const [newArray, setNewArray] = useState([]);

  function miraRepetidos() {
    vector.forEach((nums) => {
      if (!newArray.includes(nums)) {
        newArray.push(nums);
        console.log(newArray);
      }
    });

    setNewArray(newArray);
  }

  return (
    <div className="App">
      <div className="DisplayExercici3">
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
export default Exercici3;

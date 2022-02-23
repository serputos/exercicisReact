import { useState, useRef } from "react";

function Exercici2() {
  const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const inputRef = useRef();
  const inputRefPos = useRef();

  const [theArray, setTheArray] = useState(vector);

  const addValue = (i) => {
    theArray[inputRefPos.current.value] = inputRef.current.value;
    setTheArray([...theArray]);
  };

  return (
    <div className="App">
      <div className="DisplayExercici2">
        <p>
          {" "}
          Valor :<input type="number" ref={inputRef}></input>
        </p>
        <p>
          <p>
            {" "}
            Index : <input type="number" ref={inputRefPos}></input>
          </p>
        </p>
        <button
          onClick={() => {
            addValue();
          }}
        >
          Añadir Numero
        </button>
        <div>
          {theArray.map((entry, i) => (
            <div>{entry}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Exercici2;

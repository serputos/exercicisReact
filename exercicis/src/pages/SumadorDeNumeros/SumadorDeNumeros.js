import { useState, useEffect, useRef } from "react";
import "./SumadorDeNumeros.css";

function SumadorDeNumeros() {
  const [total, setTotal] = useState(0);
  const inputRef = useRef();

  const onClick = () => {
    if (isNaN(parseInt(inputRef.current.value))) {
    } else {
      setTotal(parseInt(inputRef.current.value) + total);
    }
  };

  return (
    <div className="App">
      <div className="DisplaySumadorDeNumeros">
        <h1>
          Valor : [ <input type="number" ref={inputRef}></input>]
        </h1>
        <h1>Total : [ {total} ]</h1>
        <button onClick={onClick}>Sumar</button>
      </div>
    </div>
  );
}

export default SumadorDeNumeros;

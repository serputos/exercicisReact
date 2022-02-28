import "./Comptador.css";
import { useReducer } from "react";
import { counter, Operacio, Reset } from "./Counter";

//const numeros = ["+1", "-1", "+5"];

export default function CounterUseReducer() {
  /*const [display, setDisplay] = useState(0);*/
  const [count, dispatch] = useReducer(counter, 0);

  /* const entraOperacio = (valor) => {
    if (valor === "+1" && count !== 10) {
      dispatch({ amount: 1 });
    } else if (valor === "-1" && count !== 0) {
      dispatch({ amount: -1 });
    } else if (valor === "+5" && count < 6) {
      dispatch({ amount: 5 });
    }
  };*/

  return (
    <div className="App">
      <div className="DisplayComptador">{count}</div>
      {/* {numeros.map((valor) => (
        <button onClick={() => dispatch({ type: sumaUno, amount: 1 })}>
          {valor}
        </button>
      ))} */}
      <button onClick={() => dispatch(Operacio(+1))}>+1</button>
      <button onClick={() => dispatch(Operacio(-1))}>-1</button>
      <button onClick={() => dispatch(Operacio(+5))}>+5</button>
      <button onClick={() => dispatch(Reset())}>RESET</button>
    </div>
  );
}

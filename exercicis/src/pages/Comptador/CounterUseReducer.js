import "./Comptador.css";
import { useReducer } from "react";
import { counter, Operacio, Reset } from "./Counter";

export default function CounterUseReducer() {
  const [count, dispatch] = useReducer(counter, 0);

  return (
    <div className="App">
      <div className="DisplayComptador">{count}</div>

      <button onClick={() => dispatch(Operacio(+1))}>+1</button>
      <button onClick={() => dispatch(Operacio(-1))}>-1</button>
      <button onClick={() => dispatch(Operacio(+5))}>+5</button>
      <button onClick={() => dispatch(Reset())}>RESET</button>
    </div>
  );
}

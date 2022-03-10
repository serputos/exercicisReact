import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counter, increment, reset } from "./counter";

export default function CounterRedux() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="Display">
        <p>
          <b>Counter Redux</b>
        </p>
        <div>{count}</div>
        <button onClick={() => dispatch(increment(+5))}>+5</button>
        {/*+1 es el amounte  de la function increment */}
        <button onClick={() => dispatch(increment(-1))}>-1</button>
        <button onClick={() => dispatch(reset())}>RESET</button>
      </div>
    </div>
  );
}

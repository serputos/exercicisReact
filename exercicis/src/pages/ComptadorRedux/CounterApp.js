import CounterRedux from "./CounterRedux";
import { createStore } from "redux";
import { counter } from "./counter";
import { Provider } from "react-redux";

const store = createStore(counter, 0);

export default function Video4() {
  return (
    <Provider store={store}>
      <>
        <CounterRedux />
        <CounterRedux />
      </>
    </Provider>
  );
}

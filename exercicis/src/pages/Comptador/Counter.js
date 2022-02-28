const RESET = "reset";
export function Reset() {
  return { type: RESET };
}
const OPERACIO = "OPERACIO";
export function Operacio(amount) {
  return { type: OPERACIO, amount };
}
export function counter(state, action) {
  switch (action.type) {
    case "OPERACIO":
      if (state + action.amount < 0) {
        return 0;
      } else if (state + action.amount > 10) {
        return 10;
      }
      return state + action.amount;

    case "reset":
      return 0;
    default:
      return state;
  }
}

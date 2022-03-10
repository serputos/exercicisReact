export const INCREMENT = "INCREMENT";
const RESET = "RESET";
export function increment(amount) {
  return { type: INCREMENT, amount };
}
export function reset(amount) {
  return { type: RESET, amount };
}
export const counter = (state = 5, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (state + action.amount < 0) {
        return 0;
      } else if (state + action.amount > 10) {
        return 10;
      }
      return state + action.amount;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

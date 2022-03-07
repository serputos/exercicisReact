import { createSelector } from "reselect";
const combinacionGuanyadores = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export function getTaulell(state) {
  return state.TresEnRatlla;
}
export const getCasellesGuanyadores = createSelector(getTaulell, (taulell) => {
  return combinacionGuanyadores.find(
    ([a, b, c]) => taulell[a] && taulell[b] && taulell[c] === taulell[c]
  );
});

export function getGuanyador(state) {
  return !!getCasellesGuanyadores(state);
}

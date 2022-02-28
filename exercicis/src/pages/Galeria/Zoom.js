const FOTOGRAN = "fotoGran";
export function Fotogran(i) {
  return { type: FOTOGRAN, i };
}
const FOTOPETITA = "fotoPetita";
export function FotoPetita(state) {
  return { type: FOTOPETITA };
}
export function reducer(state = null, action) {
  switch (action.type) {
    case "fotoGran":
      return action.index;

    case "fotoPetita":
      return null;
    default:
      throw new Error();
  }
}

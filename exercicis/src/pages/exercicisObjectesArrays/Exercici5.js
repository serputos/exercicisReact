import { useState } from "react";

const vectorNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const vectorABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

function Exercici5() {
  function Juntar() {
    const Concatenar = (vectorABC, vectorNums) =>
      vectorNums.map(function (num, idx) {
        return num.toString().concat(vectorABC[idx]);
      });
    setFinalVector(Concatenar(vectorABC, vectorNums));
  }
  const [finalVector, setFinalVector] = useState([]);
  return (
    <div className="App">
      <div className="DisplayExercici4">
        <>{vectorNums}</>
        <br />
        <>{vectorABC}</>
        <br />
        <button onClick={() => Juntar()}>Concatenar</button>
        <br />
        <>{finalVector}</>
      </div>
    </div>
  );
}
export default Exercici5;

const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Exercici1() {
  let maxNum = Math.max.apply(null, vector);
  let minNum = Math.min.apply(null, vector);
  const sum = vector.reduce((result, number) => result + number);
  const media = sum / vector.length;
  return (
    <div className="App">
      <div className="DisplayExercici1">
        <p> Vector : {vector}</p>
        <p>Número más grande : {maxNum}</p>
        <p>Número más pequeño : {minNum}</p>
        <p>Media : {media}</p>
      </div>
    </div>
  );
}
export default Exercici1;

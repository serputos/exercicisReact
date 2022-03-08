import Comptador from "./Comptador/Comptador";
import Galeria from "./Galeria/Galeria";
import Acordio from "./Acordio/Acordio";
import Carrusel from "./Carrusel/Carrusel";
import TresEnRatlla from "./TresEnRatlla/TresEnRatlla";
import RellotgeDigital from "./RellotgeDigital/RellotgeDigital";
import RellotgeAnalogic from "./RellotgeAnalogic/RellotgeAnalogic";
import SumadorDeNumeros from "./SumadorDeNumeros/SumadorDeNumeros";
import Exercici1 from "./exercicisObjectesArrays/Exercici1";
import Exercici2 from "./exercicisObjectesArrays/Exercici2";
import Exercici3 from "./exercicisObjectesArrays/Exercici3";
import Exercici4 from "./exercicisObjectesArrays/Exercici4";
import Exercici5 from "./exercicisObjectesArrays/Exercici5";
import Toggle from "./ToggleButton/Toggle";

const llista = [
  { path: "Comptador/Comptador", titol: "Comptador", element: <Comptador /> },
  { path: "Galeria/Galeria", titol: "Galeria de fotos", element: <Galeria /> },
  { path: "Carrusel/Carrusel", titol: "Carrusel", element: <Carrusel /> },
  { path: "Acordio/Acordio", titol: "Acordio", element: <Acordio /> },
  {
    path: "TresEnRatlla/TresEnRatlla",
    titol: "TresEnRatlla",
    element: <TresEnRatlla />,
  },
  {
    path: "RellotgeDigital/RellotgeDigital",
    titol: "RellotgeDigital",
    element: <RellotgeDigital />,
  },
  {
    path: "RellotgeAnalogic/RellotgeAnalogic",
    titol: "RellotgeAnalogic",
    element: <RellotgeAnalogic />,
  },
  {
    path: "SumadorDeNumeros/SumadorDeNumeros",
    titol: "SumadorDeNumeros",
    element: <SumadorDeNumeros />,
  },
  {
    path: "exercicisObjectesArrays/Exercici1",
    titol: "Exercici1",
    element: <Exercici1 />,
  },
  {
    path: "exercicisObjectesArrays/Exercici2",
    titol: "Exercici2",
    element: <Exercici2 />,
  },
  {
    path: "exercicisObjectesArrays/Exercici3",
    titol: "Exercici3",
    element: <Exercici3 />,
  },
  {
    path: "exercicisObjectesArrays/Exercici4",
    titol: "Exercici4",
    element: <Exercici4 />,
  },
  {
    path: "exercicisObjectesArrays/Exercici5",
    titol: "Exercici5",
    element: <Exercici5 />,
  },
  {
    path: "ToggleButton/Toggle",
    titol: "ToggleButton",
    element: <Toggle />,
  },
];

export default llista;

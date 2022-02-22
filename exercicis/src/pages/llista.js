import Comptador from "./Comptador/Comptador";
import Galeria from "./Galeria/Galeria";
import Acordio from "./Acordio/Acordio";
import Carrusel from "./Carrusel/Carrusel";
import TresEnRatlla from "./TresEnRatlla/TresEnRatlla";
import RellotgeDigital from "./RellotgeDigital/RellotgeDigital";
import RellotgeAnalogic from "./RellotgeAnalogic/RellotgeAnalogic";
import SumadorDeNumeros from "./SumadorDeNumeros/SumadorDeNumeros";

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
];

export default llista;

import Comptador from "./pages/Comptador/Comptador";
import Galeria from "./pages/Galeria/Galeria";
import Acordio from "./pages/Acordio/Acordio";
import Carrusel from "./pages/Carrusel/Carrusel";
import "./App.css";
import TresEnRatlla from "./pages/TresEnRatlla/TresEnRatlla";
import RellotgeDigital from "./pages/RellotgeDigital/RellotgeDigital";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import llista from "./pages/llista";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {llista.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

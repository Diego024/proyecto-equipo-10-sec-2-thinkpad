import { useState } from "react";
import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendario from "./assets/components/views/Calendario";
import Eventos from "./assets/components/views/Eventos";
import Deportistas from "./assets/components/views/Deportistas";
import Equipos from "./assets/components/views/Equipos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>¡Bienvenido!</h1>} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/deportistas" element={<Deportistas />} />
          <Route path="/equipos" element={<Equipos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

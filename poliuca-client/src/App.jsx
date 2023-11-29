import { useState } from "react";
import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendario from "./assets/components/views/Calendario";
/* import LogIn from "./assets/components/views/LogIn"; */
import Eventos from "./assets/components/views/Eventos";
import Deportistas from "./assets/components/views/Deportistas";
import Equipos from "./assets/components/views/Equipos";
import Entrenamientos from "./assets/components/views/Entrenamientos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>hola</p>} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/deportistas" element={<Deportistas />} />
          <Route path="/equipos" element={<Equipos />} />
          <Route path="/entrenamientos" element={<Entrenamientos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

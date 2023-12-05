import { useState } from "react";
import "./app.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Calendario from "./assets/components/views/Calendario";
import LogIn from "./assets/components/views/LogIn";
import Eventos from "./assets/components/views/Eventos";
import Deportistas from "./assets/components/views/Deportistas";
import Equipos from "./assets/components/views/Equipos";
import Entrenamientos from "./assets/components/views/Entrenamientos";
import Ejercicios from "./assets/components/views/Ejercicios";
import GestionEventos from "./assets/components/views/GestionEventos";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="704212167289-a665eo8fj4n2f73sip2s75b8uvtfqm8s.apps.googleusercontent.com">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LogIn />} />
            {/* <Route path="/calendario" element={<Calendario />} /> */}
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/deportistas" element={<Deportistas />} />
            <Route path="/equipos" element={<Equipos />} />
            {/* <Route path="/entrenamientos" element={<Entrenamientos />} /> */}
            <Route path="/ejercicios" element={<Ejercicios />} />
            <Route path="/gestioneventos" element={<GestionEventos />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;

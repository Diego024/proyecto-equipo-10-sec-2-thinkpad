import { useState } from "react";
import "./../../css/gestioneventos.scss";
import Reloj from "../icons/Reloj.jsx";
import Maps from "../icons/Maps.jsx";
import Header from "../layout/Header.jsx";
import Dialog from "../layout/Dialog.jsx";
import Input from "../layout/Input.jsx";

function GestionEventos() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmit = () => {
    alert("Buenos días, mis estimados");
  };
  return (
    <>
      <Header />

      <section className="cards body-div">
        <h1 className="page-title">Gestion de Eventos</h1>
        <a className="btn-nuevo-evento" onClick={handleOpenDialog}>
          Agregar nuevo evento
        </a>
        <article className="card volibol">
          <div className="date-line-eventos">
            <p className="date-eventos">25/11/2023</p>
          </div>
          <div className="date-container">
            <p className="day volibol">25</p>
            <p className="month">Nov</p>
          </div>

          <div className="rectangle-container">
            <img
              className="rectangle"
              src="../../src/assets/img/rectangle.png"
              alt="rectanguloQueSepara"
            />
          </div>
          <div className="event-container">
            <p className="volibol">Partido - Volleyball</p>

            <div className="event-item">
              <p>Tipo: </p> <p className="evento volibol"> Evento deportivo</p>
            </div>
            <div className="event-item">
              <img src="../../src/assets/img/time 1.png" alt="reloj" />
              <p className="duracion-evento">13:30 - 17:00</p>
            </div>

            <div className="event-item">
              <img src="../../src/assets/img/maps.png" alt="" />
              <p className="ubicacion-evento">Cancha de Baloncesto</p>
            </div>
          </div>
        </article>

        <article className="card baloncesto">
          <div className="date-line-eventos">
            <p className="date-eventos">25/11/2023</p>
          </div>
          <div className="date-container">
            <p className="day baloncesto">25</p>
            <p className="month">Nov</p>
          </div>

          <div className="rectangle-container">
            <img
              className="rectangle"
              src="../../src/assets/img/rectangle.png"
              alt="rectanguloQueSepara"
            />
          </div>
          <div className="event-container">
            <p className="baloncesto">Partido - Volleyball</p>

            <div className="event-item">
              <p>Tipo: </p>{" "}
              <p className="evento baloncesto"> Evento deportivo</p>
            </div>
            <div className="event-item">
              <img src="../../src/assets/img/time 1.png" alt="reloj" />
              <p className="duracion-evento">13:30 - 17:00</p>
            </div>

            <div className="event-item">
              <img src="../../src/assets/img/maps.png" alt="" />
              <p className="ubicacion-evento">Cancha de Baloncesto</p>
            </div>
          </div>
        </article>

        <article className="card pelota">
          <div className="date-line-eventos">
            <p className="date-eventos">25/11/2023</p>
          </div>
          <div className="date-container">
            <p className="day pelota">25</p>
            <p className="month">Nov</p>
          </div>

          <div className="rectangle-container">
            <img
              className="rectangle"
              src="../../src/assets/img/rectangle.png"
              alt="rectanguloQueSepara"
            />
          </div>
          <div className="event-container">
            <p className="pelota">Partido - Volleyball</p>

            <div className="event-item">
              <p>Tipo: </p> <p className="evento pelota"> Evento deportivo</p>
            </div>
            <div className="event-item">
              <img src="../../src/assets/img/time 1.png" alt="reloj" />
              <p className="duracion-evento">13:30 - 17:00</p>
            </div>

            <div className="event-item">
              <img src="../../src/assets/img/maps.png" alt="" />
              <p className="ubicacion-evento">Cancha de Baloncesto</p>
            </div>
          </div>
        </article>
      </section>
      <Dialog
        title={"Registro de entrenamientos"}
        open={dialogOpen}
        onClose={handleCloseDialog}
        handleSubmit={handleSubmit}
      >
        <Input
          label={"Titulo del evento"}
          placeholder={"Ingresa el titulo del evento"}
          type={"text"}
          name={"name"}
        />

        <Input
          label={"Tipo de evento"}
          type={"text"}
          name={"type"}
          placeholder={"Ingrese el tipo de evento"}
        />

        <Input
          label={"Lugar del evento"}
          placeholder={"Ingrese el lugar del evento "}
          type={"text"}
          name={"place"}
        />

        <Input
          label={"Hora del evento"}
          type={"time"}
          name={"hora"}
          placeholder={"Hora del evento"}
        />

        <Input
          label={"Fecha del evento"}
          placeholder={"Ingrese fecha del evento"}
          type={"date"}
          name={"fecha"}
        />
      </Dialog>
    </>
  );
}

export default GestionEventos;

import "../../css/gestioneventos.scss";
import Logo from "../icons/Logo.jsx";
import Reloj from "../icons/Reloj.jsx";
import Maps from "../icons/Maps.jsx";

function GestionEventos() {
  return (
    <>
      <header>
        <img
          className="menu-image"
          src="../../src/assets/img/open-menu.png"
          alt="MENU"
        />

        <Logo />
      </header>

      <section className="cards body-div">
        <h1 className="page-title">Gestion de Eventos</h1>

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
    </>
  );
}

export default GestionEventos;

import "../../css/eventos.scss";
import Logo from "../icons/Logo.jsx";
import Reloj from "../icons/Reloj.jsx";
import Maps from "../icons/Maps.jsx";

function Eventos() {
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
        <h1 className="page-title">Eventos del poliUCA</h1>

        <article className="card lunes">
          <div className="date-line">
            <p className="date">25/11/2023</p>
          </div>
          <div className="date-container">
            <p className="day">25</p>
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
            <div className="event-item">
              <img src="../../src/assets/img/time 1.png" alt="reloj" />
              <p className="duracion-evento">13:30 - 17:00</p>
            </div>

            <div className="event-item">
              <img src="../../src/assets/img/maps.png" alt="" />
              <p className="ubicacion-evento">Cancha de Baloncesto</p>
            </div>

            <div className="event-item">
              <img src="../../src/assets/img/staff.png" alt="staff" />
              <p className="institucion">Educo El Salvador</p>
            </div>
          </div>
        </article>

        <article className="card martes">
          <div className="date-line">
            <p className="date">25/11/2023</p>
          </div>
          <div className="date-container">
            <p className="day">25</p>
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
            <div className="event-item">
              <img src="../../src/assets/img/time 1.png" alt="reloj" />
              <p className="duracion-evento">13:30 - 17:00</p>
            </div>

            <div className="event-item">
              <img src="../../src/assets/img/maps.png" alt="" />
              <p className="ubicacion-evento">Cancha de Baloncesto</p>
            </div>

            <div className="event-item">
              <img src="../../src/assets/img/staff.png" alt="staff" />
              <p className="institucion">Educo El Salvador</p>
            </div>
          </div>
        </article>

        <article className="card miercoles">
          <div className="date-line">
            <p className="date">25/11/2023</p>
          </div>
          <div className="date-container">
            <p className="day">25</p>
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
            <div className="event-item">
              <img src="../../src/assets/img/time 1.png" alt="reloj" />
              <p className="duracion-evento">13:30 - 17:00</p>
            </div>

            <div className="event-item">
              <img src="../../src/assets/img/maps.png" alt="" />
              <p className="ubicacion-evento">Cancha de Baloncesto</p>
            </div>

            <div className="event-item">
              <img src="../../src/assets/img/staff.png" alt="staff" />
              <p className="institucion">Educo El Salvador</p>
            </div>
          </div>
        </article>

        <article className="card jueves">
          <div className="date-line">
            <p className="date">25/11/2023</p>
          </div>
          <div className="date-container">
            <p className="day">25</p>
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
            <div className="event-item">
              <img src="../../src/assets/img/time 1.png" alt="reloj" />
              <p className="duracion-evento">13:30 - 17:00</p>
            </div>

            <div className="event-item">
              <img src="../../src/assets/img/maps.png" alt="" />
              <p className="ubicacion-evento">Cancha de Baloncesto</p>
            </div>

            <div className="event-item">
              <img src="../../src/assets/img/staff.png" alt="staff" />
              <p className="institucion">Educo El Salvador</p>
            </div>
          </div>
        </article>

        <article className="card viernes">
          <div className="date-line">
            <p className="date">25/11/2023</p>
          </div>
          <div className="date-container">
            <p className="day">25</p>
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
            <div className="event-item">
              <img src="../../src/assets/img/time 1.png" alt="reloj" />
              <p className="duracion-evento">13:30 - 17:00</p>
            </div>

            <div className="event-item">
              <img src="../../src/assets/img/maps.png" alt="" />
              <p className="ubicacion-evento">Cancha de Baloncesto</p>
            </div>

            <div className="event-item">
              <img src="../../src/assets/img/staff.png" alt="staff" />
              <p className="institucion">Educo El Salvador</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Eventos;

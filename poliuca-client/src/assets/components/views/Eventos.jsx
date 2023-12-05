import "./../../css/eventos.scss";
import Logo from "../icons/Logo.jsx";
import Reloj from "../icons/Reloj.jsx";
import Maps from "../icons/Maps.jsx";
import { getAllEventos } from "./../../../services/evento.service.js";
import { useEffect, useState } from "react";
import Header from "../layout/Header.jsx";
import { getDayFromDate, formatDate, getDay } from "./../../utils.js";
import { useNavigate } from "react-router-dom";

function Eventos() {
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (!window.localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const events = await getAllEventos();
    setEvents(events);
  };

  return (
    <>
      <Header />

      <section className="cards body-div">
        <h1 className="page-title">Eventos del poliUCA</h1>

        {events.map((event) => (
          <article className="card lunes">
            <div className="date-line-eventos">
              <p className="date-eventos">{formatDate(event.date_event)}</p>
            </div>
            <div className="date-container">
              <p className="day">{getDayFromDate(event.date_event)}</p>
              <p className="month">{getDay(event.date_event).slice(0, 3)}</p>
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
                <img src="../../src/assets/img/staff.png" alt="staff" />
                <p className="institucion">{event.title}</p>
              </div>

              <div className="event-item">
                <img src="../../src/assets/img/time 1.png" alt="reloj" />
                <p className="duracion-evento">{event.hour}</p>
              </div>

              <div className="event-item">
                <img src="../../src/assets/img/maps.png" alt="" />
                <p className="ubicacion-evento">{event.place}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Eventos;

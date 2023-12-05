import "./../../css/eventos.scss";
import { getAllEventos } from "./../../../services/evento.service.js";
import { useEffect, useState } from "react";
import Header from "./../layout/Header.jsx";
import { getDayFromDate, formatDate, getDay } from "./../../utils.js";
import { useNavigate } from "react-router-dom";
import Rectangle from "./../../img/rectangle.png";
import StaffIcon from "./../../img/staff.png";
import ClockIcon from "./../../img/time.png";
import MapIcon from "./../../img/maps.png";

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
                src={Rectangle}
                alt="rectanguloQueSepara"
              />
            </div>
            <div className="event-container">
              <div className="event-item">
                <img src={StaffIcon} alt="staff" />
                <p className="institucion">{event.title}</p>
              </div>

              <div className="event-item">
                <img src={ClockIcon} alt="reloj" />
                <p className="duracion-evento">{event.hour}</p>
              </div>

              <div className="event-item">
                <img src={MapIcon} alt="" />
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

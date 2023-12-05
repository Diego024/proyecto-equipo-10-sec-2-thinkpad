import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../../css/gestioneventos.scss";
import Header from "./../layout/Header.jsx";
import Dialog from "./../layout/Dialog.jsx";
import Input from "./../layout/Input.jsx";
import Rectangle from "./../../img/rectangle.png";
import StaffIcon from "./../../img/staff.png";
import ClockIcon from "./../../img/time.png";
import MapIcon from "./../../img/maps.png";
import {
  getAllEventos,
  createdEvento,
} from "./../../../services/evento.service.js";
import { getDayFromDate, formatDate, getDay } from "./../../utils.js";

function GestionEventos() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);

  const initialFormData = {
    title: "",
    type_event: "",
    place: "",
    hour: "",
    date_event: "",
  };
  const [dialogOpen, setDialogOpen] = useState(false);
  const [eventos, setEvento] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorsValidation = /*validateForm(formData) */ [];

    setErrorMessages([]);

    if (errorsValidation.length > 0) {
      setErrorMessages(errorsValidation);
      return;
    }

    try {
      await createdEvento(formData);
      console.log(formData);
      setFormData(initialFormData);
      handleCloseDialog();
      fetchData();
    } catch (error) {
      alert("ERROR al guardar el Evento: " + error);
    }
  };

  const fetchData = async () => {
    const eventos = await getAllEventos();
    setEvento(eventos);
  };

  return (
    <>
      <Header />

      <section className="cards body-div">
        <h1 className="page-title">Gestion de Eventos</h1>
        <a className="btn-nuevo-evento" onClick={handleOpenDialog}>
          Agregar nuevo evento
        </a>
        {eventos.map((event) => (
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
        ;
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
          name={"title"}
          formData={formData}
          setFormData={setFormData}
        />

        <Input
          label={"Tipo de evento"}
          type={"text"}
          name={"type_event"}
          placeholder={"Ingrese el tipo de evento"}
          formData={formData}
          setFormData={setFormData}
        />

        <Input
          label={"Lugar del evento"}
          placeholder={"Ingrese el lugar del evento "}
          type={"text"}
          name={"place"}
          formData={formData}
          setFormData={setFormData}
        />

        <Input
          label={"Hora del evento"}
          type={"time"}
          name={"hour"}
          placeholder={"Hora del evento"}
          formData={formData}
          setFormData={setFormData}
        />

        <Input
          label={"Fecha del evento"}
          placeholder={"Ingrese fecha del evento"}
          type={"date"}
          name={"date_event"}
          formData={formData}
          setFormData={setFormData}
        />
      </Dialog>
    </>
  );
}

export default GestionEventos;

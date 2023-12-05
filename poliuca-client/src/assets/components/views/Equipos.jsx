import "./../../css/equipos.scss";
import Header from "./../layout/Header.jsx";
import { useNavigate } from "react-router";
import Dialog from "./../layout/Dialog.jsx";
import Input from "./../layout/Input.jsx";
import {
  getAllEquipos,
  createdEquipo,
} from "./../../../services/equipo.service.js";
import { useEffect, useState } from "react";
import { formatDate } from "./../../utils.js";
import BacketballIcon from "./../../img/basket-ball 1.png";

function Equipos() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);

  const initialFormData = {
    name: "",
    players: 0,
    sport: "",
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errorMessages, setErrorMessages] = useState([]);

  const [equipos, setEquipo] = useState([]);

  useEffect(() => {
    fetchEquipos();
  }, []);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorsValidation = [];

    setErrorMessages([]);

    if (errorsValidation.length > 0) {
      setErrorMessages(errorsValidation);
      return;
    }

    try {
      const nuevo = await createdEquipo(formData);
      if (nuevo) {
        // console.log(formData);
      }
      setFormData(initialFormData);
      setDialogOpen(false);
    } catch (error) {
      alert("ERROR al guardar el Equipo: " + error);
    }
  };

  const fetchEquipos = async () => {
    const equipos = await getAllEquipos();
    setEquipo(equipos);
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    formData.sport = e.target.value;
  };

  return (
    <>
      <Header />

      <section className="cards body-div">
        <h1 className="page-title">Gestion de Deportistas</h1>

        <div className="container-opciones">
          <div className="deportistas" onClick={() => navigate("/deportistas")}>
            Deportistas
          </div>
          <div className="equipos select">Equipos</div>
        </div>

        <a className="btn-agregar-deportista" onClick={handleOpenDialog}>
          Agregar nuevo equipo
        </a>

        {equipos.map((equipo) => (
          <article className="card bkb">
            <div className="ball-container bkb">
              <img src={BacketballIcon} alt="volleyball" />
            </div>
            <p name="_id" hidden value={equipo._id}></p>
            <div className="deporte-container">
              <div className="seleccion">
                <p>{equipo.name}</p>
              </div>
              <div className="fecha-creacion">
                <p>Fecha de creacion:</p>
                <p className="bkb">{formatDate(equipo.create_date)} </p>
              </div>
              <div className="numero-jugadores">
                <p>N° de jugadores:</p>

                <div className="num bkb">
                  <p>{equipo.players}</p>
                </div>
              </div>
            </div>
          </article>
        ))}

        <figure className="add-container">
          <img
            className="add-btn"
            src="./../../src/assets/img/Add.png"
            alt="add"
          />

          <Dialog
            title={"Gestión de Equipos"}
            open={dialogOpen}
            onClose={handleCloseDialog}
            handleSubmit={handleSubmit}
          >
            {/* <form action="get" id="form" className="dialog-content"> */}
            <Input
              label={"Nombre del Equipo"}
              placeholder={"Ingresa los nombres"}
              type={"text"}
              name={"name"}
              formData={formData}
              setFormData={setFormData}
            />

            <Input
              label={"Numero Jugadores"}
              placeholder={"Ingresa la cantidad de jugadores"}
              type={"number"}
              name={"players"}
              formData={formData}
              setFormData={setFormData}
            />

            <Input label={"Disciplinas"} type={"checkbox"}>
              <label>
                <input
                  type="radio"
                  name="sport"
                  value="Volleyball"
                  onChange={handleChange}
                />
                Volleyball
              </label>
              <label>
                <input
                  type="radio"
                  name="sport"
                  value="Basketball"
                  onChange={handleChange}
                />
                Basketball
              </label>

              <label>
                <input
                  type="radio"
                  name="sport"
                  value="Futbol"
                  onChange={handleChange}
                />
                Futbol
              </label>

              <label>
                <input
                  type="radio"
                  name="sport"
                  value="Futbol sala"
                  onChange={handleChange}
                />
                Futbol Sala
              </label>
            </Input>
            {/* </form> */}
          </Dialog>
        </figure>
      </section>
    </>
  );
}

export default Equipos;

import { useEffect, useState } from "react";
import "./../../css/deportistas.scss";
import Dialog from "../layout/Dialog.jsx";
import Input from "../layout/Input.jsx";
import Header from "../layout/Header.jsx";
import {
  createdDeportista,
  getAllDeportistas,
} from "../../../services/deportista.service.js";
import { useNavigate } from "react-router";

function Deportistas() {
  const navigate = useNavigate();

  const initialFormData = {
    name: "",
    last_name: "",
    email: "",
    weight: 0,
    height: 0,
    birth_date: "",
    sports: [],
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  const [players, setPlayers] = useState([]);
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
      await createdDeportista(formData);
      setFormData(initialFormData);
    } catch (error) {
      alert("ERROR al guardar el deportista: " + error);
    }
  };

  const fetchData = async () => {
    const players = await getAllDeportistas();
    setPlayers(players);
  };

  const handleCheckboxChange = (sportName) => {
    setFormData((prevData) => {
      if (prevData.sports.some((sport) => sport.name === sportName)) {
        return {
          ...prevData,
          sports: prevData.sports.filter((sport) => sport.name !== sportName),
        };
      } else {
        return {
          ...prevData,
          sports: [...prevData.sports, { name: sportName }],
        };
      }
    });
  };

  return (
    <>
      <Header />

      <section className="cards body-div">
        <h1 className="page-title">Gestion de Deportistas</h1>

        <div className="container-opciones">
          <div className="deportistas select">Deportistas</div>
          <div className="equipos" onClick={() => navigate("/equipos")}>
            Equipos
          </div>
        </div>

        <a className="btn-agregar-deportista" onClick={handleOpenDialog}>
          Agregar nuevo deportista
        </a>

        {players.map((player) => (
          <article className="card">
            <div className="profile-container">
              <img src={player.picture} alt="Player profile picture" />
            </div>

            <div className="info-container">
              <div className="nombre-deportista">
                <p>
                  {player.name} {player.last_name}
                </p>
              </div>
              <div className="disciplinas">
                <p>Disciplinas:</p>
                {player.sports.map((sport) => `${sport.name} `)}
              </div>
            </div>
          </article>
        ))}

        <figure className="add-container" onClick={handleOpenDialog}>
          <img
            className="add-btn"
            src="../../src/assets/img/Add.png"
            alt="add"
          />
        </figure>
      </section>
      <Dialog
        title={"Gestión de deportistas"}
        open={dialogOpen}
        onClose={handleCloseDialog}
        handleSubmit={handleSubmit}
      >
        {/* <form action="get" id="form" className="dialog-content"> */}
        <Input
          label={"Nombres"}
          placeholder={"Ingresa los nombres"}
          type={"text"}
          name={"name"}
          formData={formData}
          setFormData={setFormData}
        />

        <Input
          label={"Apellidos"}
          placeholder={"Ingresa los apellidos"}
          type={"text"}
          name={"last_name"}
          formData={formData}
          setFormData={setFormData}
        />

        <Input
          label={"Correo electrónico"}
          placeholder={"Ingresa el correo electrónico"}
          type={"email"}
          name={"email"}
          formData={formData}
          setFormData={setFormData}
        />

        <Input
          label={"Peso (lb)"}
          placeholder={"Ingresa el peso en libras"}
          type={"number"}
          name={"weight"}
          formData={formData}
          setFormData={setFormData}
        />

        <Input
          label={"Altura (cm)"}
          placeholder={"Ingresa la altura en centímetros"}
          type={"number"}
          name={"height"}
          formData={formData}
          setFormData={setFormData}
        />

        <Input
          label={"Fecha de nacimiento"}
          placeholder={"Ingresa la fecha de nacimiento"}
          type={"date"}
          name={"birth_date"}
          formData={formData}
          setFormData={setFormData}
        />
        <Input label={"Disciplinas"} type={"checkbox"}>
          <label>
            <input
              type="checkbox"
              name="volley"
              checked={formData.sports.some(
                (sport) => sport.name === "Vóleibol"
              )}
              onChange={() => handleCheckboxChange("Vóleibol")}
            />
            Volleyball
          </label>
          <label>
            <input
              type="checkbox"
              name="basket"
              checked={formData.sports.some(
                (sport) => sport.name === "Baloncesto"
              )}
              onChange={() => handleCheckboxChange("Baloncesto")}
            />
            Basketball
          </label>

          <label>
            <input
              type="checkbox"
              name="futbol"
              checked={formData.sports.some((sport) => sport.name === "Fútbol")}
              onChange={() => handleCheckboxChange("Fútbol")}
            />
            Futbol
          </label>

          <label>
            <input
              type="checkbox"
              name="futsal"
              checked={formData.sports.some(
                (sport) => sport.name === "Fútbol sala"
              )}
              onChange={() => handleCheckboxChange("Fútbol sala")}
            />
            Futbol Sala
          </label>
        </Input>
        {/* </form> */}
      </Dialog>
    </>
  );
}

export default Deportistas;

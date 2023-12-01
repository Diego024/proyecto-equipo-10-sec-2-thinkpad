import { useState } from "react";
import "./../../css/deportistas.scss";
import Dialog from "../layout/Dialog.jsx";
import Input from "../layout/Input.jsx";
import Header from "../layout/Header.jsx";

function Deportistas() {
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
        <h1 className="page-title">Gestion de Deportistas</h1>

        <div className="container-opciones">
          <div className="deportistas select">Deportistas</div>
          <div className="equipos">Equipos</div>
        </div>

        <a className="btn-agregar-deportista" onClick={handleOpenDialog}>
          Agregar nuevo deportista
        </a>

        <article className="card">
          <div className="profile-container">
            <img src="../../src/assets/img/profile1.png" alt="" />
          </div>

          <div className="info-container">
            <div className="nombre-deportista">
              <p>Jose Alejandro Hernandez Chavez</p>
            </div>
            <div className="disciplinas">
              <p>Disciplinas:</p>
              <p>Football, Basketball, Volleyball, Atletismo</p>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="profile-container">
            <img src="../../src/assets/img/profile2.png" alt="" />
          </div>

          <div className="info-container">
            <div className="nombre-deportista">
              <p>Jose Alejandro Hernandez Chavez</p>
            </div>
            <div className="disciplinas">
              <p>Disciplinas:</p>
              <p>Football, Basketball, Volleyball, Atletismo</p>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="profile-container">
            <img src="../../src/assets/img/profile3.png" alt="" />
          </div>

          <div className="info-container">
            <div className="nombre-deportista">
              <p>Jose Alejandro Hernandez Chavez</p>
            </div>
            <div className="disciplinas">
              <p>Disciplinas:</p>
              <p>Football, Basketball, Volleyball, Atletismo</p>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="profile-container">
            <img src="../../src/assets/img/profile4.png" alt="" />
          </div>

          <div className="info-container">
            <div className="nombre-deportista">
              <p>Jose Alejandro Hernandez Chavez</p>
            </div>
            <div className="disciplinas">
              <p>Disciplinas:</p>
              <p>Football, Basketball, Volleyball, Atletismo</p>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="profile-container">
            <img src="../../src/assets/img/profile5.png" alt="" />
          </div>

          <div className="info-container">
            <div className="nombre-deportista">
              <p>Jose Alejandro Hernandez Chavez</p>
            </div>
            <div className="disciplinas">
              <p>Disciplinas:</p>
              <p>Football, Basketball, Volleyball, Atletismo</p>
            </div>
          </div>
        </article>

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
        <Input
          label={"Nombres"}
          placeholder={"Ingresa los nombres"}
          type={"text"}
          name={"name"}
        />

        <Input
          label={"Apellidos"}
          placeholder={"Ingresa los apellidos"}
          type={"text"}
          name={"lastname"}
        />

        <Input
          label={"Correo electrónico"}
          placeholder={"Ingresa el correo electrónico"}
          type={"email"}
          name={"email"}
        />

        <Input
          label={"Peso (lb)"}
          placeholder={"Ingresa el peso en libras"}
          type={"number"}
          name={"weight"}
        />

        <Input
          label={"Altura (cm)"}
          placeholder={"Ingresa la altura en centímetros"}
          type={"number"}
          name={"height"}
        />

        <Input
          label={"Fecha de nacimiento"}
          placeholder={"Ingresa la fecha de nacimiento"}
          type={"date"}
          name={"birthdate"}
        />
        <Input label={"Disciplinas"} type={"checkbox"} name={"checkboxOptions"}>
          <label>
            <input type="checkbox" name="volley" />
            Volleyball
          </label>
          <label>
            <input type="checkbox" name="basket" />
            Basketball
          </label>

          <label>
            <input type="checkbox" name="futbol" />
            Futbol
          </label>

          <label>
            <input type="checkbox" name="futsal" />
            Futbol Sala
          </label>
        </Input>
      </Dialog>
    </>
  );
}

export default Deportistas;

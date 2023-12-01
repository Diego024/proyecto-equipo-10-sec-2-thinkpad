import { useState } from "react";
import "../../css/ejercicios.scss";
import Logo from "../icons/Logo.jsx";
import Reloj from "../icons/Reloj.jsx";
import Maps from "../icons/Maps.jsx";
import Dialog from "../layout/Dialog.jsx";
import Input from "../layout/Input.jsx";

function Ejercicios() {
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
      <header>
        <img
          className="menu-image"
          src="../../src/assets/img/open-menu.png"
          alt="MENU"
        />
        <Logo />
      </header>

      <section className="cards body-div">
        <h1 className="page-title">Gestion de entrenamientos</h1>
        <div className="container-opciones2">
          <div className="ejercicios select">Ejercicios</div>
          <div className="rutinas ">Rutinas</div>
        </div>
        <a className="btn-nuevo-ejercicio" onClick={handleOpenDialog}>
          Agregar nuevo ejercicio
        </a>

        <article className="card abdomen">
          <div className="parteCuerpo-container">
            <img src="../../src/assets/img/abs.png" alt="abs" />
          </div>

          <div className="rectangle-container">
            <img
              className="rectangle"
              src="../../src/assets/img/rectangle.png"
              alt="rectanguloQueSepara"
            />
          </div>
          <div className="ejercicio-container">
            <div className="ejercicio-item">
              <p className="name-ejercicio">Flexiones de abdominales</p>
            </div>

            <div className="ejercicio-item">
              <img src="../../src/assets/img/target.png" alt="" />
              <p className="body-focus">Abdomen</p>
            </div>

            <div className="ejercicio-item">
              <img src="../../src/assets/img/pilates.png" alt="staff" />
              <p className="material">Alfombrilla</p>
            </div>
          </div>
        </article>

        <article className="card brazo">
          <div className="parteCuerpo-container">
            <img src="../../src/assets/img/arm.png" alt="abs" />
          </div>

          <div className="rectangle-container">
            <img
              className="rectangle"
              src="../../src/assets/img/rectangle.png"
              alt="rectanguloQueSepara"
            />
          </div>
          <div className="ejercicio-container">
            <div className="ejercicio-item">
              <p className="name-ejercicio">Curl de biceps</p>
            </div>

            <div className="ejercicio-item">
              <img src="../../src/assets/img/target.png" alt="" />
              <p className="body-focus">Brazos</p>
            </div>

            <div className="ejercicio-item">
              <img src="../../src/assets/img/pilates.png" alt="staff" />
              <p className="material">Mancuernas</p>
            </div>
          </div>
        </article>

        <article className="card pecho">
          <div className="parteCuerpo-container">
            <img src="../../src/assets/img/chest.png" alt="abs" />
          </div>

          <div className="rectangle-container">
            <img
              className="rectangle"
              src="../../src/assets/img/rectangle.png"
              alt="rectanguloQueSepara"
            />
          </div>
          <div className="ejercicio-container">
            <div className="ejercicio-item">
              <p className="name-ejercicio">Press plano de mancuernas</p>
            </div>

            <div className="ejercicio-item">
              <img src="../../src/assets/img/target.png" alt="" />
              <p className="body-focus">Pecho</p>
            </div>

            <div className="ejercicio-item">
              <img src="../../src/assets/img/pilates.png" alt="staff" />
              <p className="material">Banco plano, mancuernas</p>
            </div>
          </div>
        </article>

        <article className="card espalda">
          <div className="parteCuerpo-container">
            <img src="../../src/assets/img/back.png" alt="abs" />
          </div>

          <div className="rectangle-container">
            <img
              className="rectangle"
              src="../../src/assets/img/rectangle.png"
              alt="rectanguloQueSepara"
            />
          </div>
          <div className="ejercicio-container">
            <div className="ejercicio-item">
              <p className="name-ejercicio">Remo con mancuernas</p>
            </div>

            <div className="ejercicio-item">
              <img src="../../src/assets/img/target.png" alt="" />
              <p className="body-focus">Espalda</p>
            </div>

            <div className="ejercicio-item">
              <img src="../../src/assets/img/pilates.png" alt="staff" />
              <p className="material">Mancuernas</p>
            </div>
          </div>
        </article>

        <article className="card cardio">
          <div className="parteCuerpo-container">
            <img src="../../src/assets/img/cardio.png" alt="abs" />
          </div>

          <div className="rectangle-container">
            <img
              className="rectangle"
              src="../../src/assets/img/rectangle.png"
              alt="rectanguloQueSepara"
            />
          </div>
          <div className="ejercicio-container">
            <div className="ejercicio-item">
              <p className="name-ejercicio">Correr 15 minutos</p>
            </div>

            <div className="ejercicio-item">
              <img src="../../src/assets/img/target.png" alt="" />
              <p className="body-focus">Cardio</p>
            </div>

            <div className="ejercicio-item">
              <img src="../../src/assets/img/pilates.png" alt="staff" />
              <p className="material">Caminadora</p>
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
          label={"Nombre del entrenamiento"}
          placeholder={"Ingresa el nombre del entrenamiento"}
          type={"text"}
          name={"name"}
        />

        <Input
          label={"Disciplina"}
          type={"select"}
          name={"sport"}
          placeholder={"Seleccione la disciplina"}
        >
          <option value="Volleyball">Volleyball</option>
          <option value="Soccer">Futbol</option>
          <option value="Basketball">Baloncesto</option>
          <option value="run">Atletismo</option>
        </Input>

        <Input
          label={"Fecha del entreno"}
          placeholder={"Ingrese la fecha del entreno"}
          type={"date"}
          name={"date"}
        />

        <Input label={"Tipo"} type={"checkbox"} name={"checkboxOptions"}>
          <label>
            <input type="checkbox" name="individual" />
            Individual
          </label>
          <label>
            <input type="checkbox" name="grupal" />
            Grupal
          </label>
        </Input>

        <Input
          label={"Ejercicios a realizar"}
          placeholder={"Seleccione los ejercicios"}
          type={"select"}
          name={"exercises"}
        >
          <option value="press">Press</option>
          <option value="remo">Remo</option>
          <option value="squat">Squat</option>
          <option value="curl">Curl</option>
          <option value="cardio">Cardio</option>
        </Input>
      </Dialog>
    </>
  );
}

export default Ejercicios;

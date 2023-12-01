import { useState } from "react";
import "../../css/entrenamientos.scss";
import Logo from "../icons/Logo.jsx";
import Dialog from "../layout/Dialog.jsx";
import Input from "../layout/Input.jsx";

function Entrenamientos() {
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
        <h1 className="page-title">Gestion de Entrenamientos</h1>
        <div className="container-opciones">
          <div className="deportistas ">Ejercicios</div>
          <div className="equipos select">Rutinas</div>
        </div>
        {/* <a className="btn-agregar-deportista">Agregar nuevo equipo</a> */}
        <a className="exercise" onClick={handleOpenDialog}>
          Agregar nueva rutina{" "}
        </a>
        <article className="card bkb">
          <div className="ball-container bkb">
            <img
              src="../../src/assets/img/basket-ball 1.png"
              alt="volleyball"
            />
          </div>

          <div className="deporte-container">
            <div className="seleccion basket">
              <p>Rutina de Fundamentales</p>
            </div>
            <div className="fecha-creacion">
              <p>Tipo: </p>
              <p className="bkb">Grupal</p>
            </div>
            <div className="numero-jugadores">
              <p>Disciplina:</p>

              <div className="basketball">
                <p>Basketball</p>
              </div>
            </div>
          </div>
        </article>
        <article className="card vol">
          <div className="ball-container vol">
            <img src="../../src/assets/img/volleyball 1.png" alt="volleyball" />
          </div>

          <div className="deporte-container">
            <div className="seleccion volleyball">
              <p>Rutina de Fundamentales</p>
            </div>
            <div className="fecha-creacion">
              <p>Tipo: </p>
              <p className="vol">Grupal</p>
            </div>
            <div className="numero-jugadores">
              <p>Disciplina:</p>

              <div className="volleyball">
                <p>Basketball</p>
              </div>
            </div>
          </div>
        </article>
        <article className="card fut">
          <div className="ball-container fut">
            <img src="../../src/assets/img/soccer 1.png" alt="volleyball" />
          </div>

          <div className="deporte-container">
            <div className="seleccion futbol">
              <p>Rutina de sets y saque</p>
            </div>
            <div className="fecha-creacion">
              <p>Tipo: </p>
              <p className="fut">Grupal</p>
            </div>
            <div className="numero-jugadores">
              <p>Disciplina:</p>

              <div className="futbol">
                <p>Basketball</p>
              </div>
            </div>
          </div>
        </article>
        <article className="card atletismo">
          <div className="ball-container atletismo">
            <img src="../../src/assets/img/sports 1.png" alt="volleyball" />
          </div>

          <div className="deporte-container">
            <div className="seleccion run ">
              <p>Rutina de Fundamentales</p>
            </div>
            <div className="fecha-creacion">
              <p>Tipo: </p>
              <p className="atletismo">Grupal</p>
            </div>
            <div className="numero-jugadores">
              <p>Disciplina:</p>

              <div className="run">
                <p>Basketball</p>
              </div>
            </div>
          </div>
        </article>
        <article className="card vol">
          <div className="ball-container vol">
            <img src="../../src/assets/img/volleyball 1.png" alt="volleyball" />
          </div>

          <div className="deporte-container">
            <div className="seleccion volleyball">
              <p>Rutina de Fundamentales</p>
            </div>
            <div className="fecha-creacion">
              <p>Tipo: </p>
              <p className="vol">Grupal</p>
            </div>
            <div className="numero-jugadores">
              <p>Disciplina:</p>

              <div className="volleyball">
                <p>Basketball</p>
              </div>
            </div>
          </div>
        </article>
        <figure className="add-container">
          <img
            className="add-btn"
            src="../../src/assets/img/Add.png"
            alt="add"
          />
        </figure>
      </section>
      <Dialog
        title={"Registro de entrenamientos"}
        open={dialogOpen}
        onClose={handleCloseDialog}
        handleSubmit={handleSubmit}
      >
        <Input
          label={"Nombre del ejercicio"}
          placeholder={"Ingresa el nombre del ejercicio"}
          type={"text"}
          name={"name"}
        />

        <Input
          label={"Musculo que se enfoca"}
          type={"select"}
          name={"muscle"}
          placeholder={"Musculo que se enfoca"}
        >
          <option value="pecho">Pecho</option>
          <option value="espalda">Espalda</option>
          <option value="pierna">Pierna</option>
          <option value="brazos">Brazos</option>
        </Input>

        <Input
          label={"Equipo a utilizar"}
          placeholder={"Ingrese el equipo a utilizar"}
          type={"text"}
          name={"equipment"}
        />
      </Dialog>
    </>
  );
}

export default Entrenamientos;

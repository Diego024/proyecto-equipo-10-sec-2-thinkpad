import "../../css/entrenamientos.scss";
import Logo from "../icons/Logo.jsx";

function Entrenamientos() {
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
          <div className="deportistas">Ejercicios</div>
          <div className="equipos">Rutinas</div>
        </div>
        {/* <a className="btn-agregar-deportista">Agregar nuevo equipo</a> */}
        <article className="card bkb">
          <div className="ball-container bkb">
            <img
              src="../../src/assets/img/basket-ball 1.png"
              alt="volleyball"
            />
          </div>

          <div className="deporte-container">
            <div className="seleccion">
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
            <div className="seleccion">
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
            <div className="seleccion">
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
            <div className="seleccion">
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
            <div className="seleccion">
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
    </>
  );
}

export default Entrenamientos;

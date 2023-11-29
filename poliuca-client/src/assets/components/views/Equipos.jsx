import "../../css/equipos.scss";
import Logo from "../icons/Logo.jsx";

function Equipos() {
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
        <h1 className="page-title">Gestion de Deportistas</h1>

        <div className="container-opciones">
          <div className="deportistas">Deportistas</div>
          <div className="equipos select">Equipos</div>
        </div>

        <a className="btn-agregar-deportista">Agregar nuevo equipo</a>

        <article className="card bkb">
          <div className="ball-container bkb">
            <img
              src="../../src/assets/img/basket-ball 1.png"
              alt="volleyball"
            />
          </div>

          <div className="deporte-container">
            <div className="seleccion">
              <p>Selección UCA</p>
            </div>
            <div className="fecha-creacion">
              <p>Fecha de creacion:</p>
              <p className="bkb">25 de enero del 2023 </p>
            </div>
            <div className="numero-jugadores">
              <p>N° de jugadores:</p>

              <div className="num bkb">
                <p>14</p>
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
              <p className="baloncesto">Selección UCA</p>
            </div>
            <div className="fecha-creacion">
              <p>Fecha de creacion:</p>
              <p className="vol">25 de enero del 2023 </p>
            </div>
            <div className="numero-jugadores">
              <p>N° de jugadores:</p>

              <div className="num vol">
                {" "}
                <p>14</p>
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
              <p>Selección UCA</p>
            </div>
            <div className="fecha-creacion">
              <p>Fecha de creacion:</p>
              <p className="fut">25 de enero del 2023 </p>
            </div>
            <div className="numero-jugadores">
              <p>N° de jugadores:</p>

              <div className="num fut">
                {" "}
                <p>14</p>
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
              <p>Selección UCA</p>
            </div>
            <div className="fecha-creacion">
              <p>Fecha de creacion:</p>
              <p className="atletismo">25 de enero del 2023 </p>
            </div>
            <div className="numero-jugadores">
              <p>N° de jugadores:</p>

              <div className="num atletismo">
                {" "}
                <p>14</p>
              </div>
            </div>
          </div>
        </article>

        <article className="card bkb">
          <div className="ball-container bkb">
            <img src="../../src/assets/img/volleyball 1.png" alt="volleyball" />
          </div>

          <div className="deporte-container">
            <div className="seleccion ">
              <p>Selección UCA</p>
            </div>
            <div className="fecha-creacion">
              <p>Fecha de creacion:</p>
              <p className="vol">25 de enero del 2023 </p>
            </div>
            <div className="numero-jugadores">
              <p>N° de jugadores:</p>

              <div className="num bkb">
                {" "}
                <p>14</p>
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

export default Equipos;

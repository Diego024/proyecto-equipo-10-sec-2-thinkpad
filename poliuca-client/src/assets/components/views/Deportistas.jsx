import "../../css/deportistas.scss";
import Logo from "../icons/Logo.jsx";

function Deportistas() {
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
          <div className="deportistas select">Deportistas</div>
          <div className="equipos">Equipos</div>
        </div>

        <a className="btn-agregar-deportista">Agregar nuevo deportista</a>

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

export default Deportistas;

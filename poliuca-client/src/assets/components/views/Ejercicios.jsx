import "../../css/ejercicios.scss";
import Reloj from "../icons/Reloj.jsx";
import Maps from "../icons/Maps.jsx";
import Header from "../layout/Header.jsx";

function Ejercicios() {
  return (
    <>
      <Header />

      <section className="cards body-div">
        <h1 className="page-title">Gestion de entrenamientos</h1>
        <div className="container-opciones2">
          <div className="ejercicios">Ejercicios</div>
          <div className="rutinas select">Rutinas</div>
        </div>

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
    </>
  );
}

export default Ejercicios;

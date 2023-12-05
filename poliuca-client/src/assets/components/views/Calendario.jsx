import "./../../css/calendario.scss";
import Logo from "../icons/Logo.jsx";
import Header from "../layout/Header.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Calendario() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Header />

      <section className="cards body-div">
        <h1 className="page-title">Mi Calendario</h1>

        <article className="card volleyball">
          <div className="date-line">
            <p className="date">25/11/2023</p>
          </div>
          <div className="date-container">
            <p className="day">25</p>
            <p className="month">Nov</p>
          </div>
          <div>
            <p>
              <span className="evento">Entreno - volleyball</span>
              <p className="descripcion-evento">
                Practica de aerobicos y resistencia en el polideportivo
              </p>
            </p>
          </div>
        </article>

        <article className="card basket">
          <div className="date-line">
            <p className="date">25/11/2023</p>
          </div>
          <div className="date-container">
            <p className="day">25</p>
            <p className="month">Nov</p>
          </div>
          <div>
            <p>
              <span className="evento">Entreno - Basket</span>
              <p className="descripcion-evento">
                Partido en torneo de universidades contra Universidad Don Bosco
              </p>
              <span className="punto"></span>
            </p>
          </div>
        </article>
        <article className="card football">
          <div className="date-line">
            <p className="date">25/11/2023</p>
          </div>
          <div className="date-container">
            <p className="day">25</p>
            <p className="month">Nov</p>
          </div>
          <div>
            <p>
              <span className="evento">Partido - football</span>

              <p className="descripcion-evento">
                Partido en torneo de universidades contra UTEC
              </p>
              <span className="punto"></span>
            </p>
          </div>
        </article>
        <article className="card otroColor">
          <div className="date-line">
            <p className="date">25/11/2023</p>
          </div>
          <div className="date-container">
            <p className="day">25</p>
            <p className="month">Nov</p>
          </div>
          <div>
            <p>
              <span className="name-user">Partido-Basket</span>

              <p className="descripcion-evento">
                Partido amistoso contra la Universidad Don Bosco
              </p>

              <span className="punto"></span>
            </p>
          </div>
        </article>

        <article className="card volleyball">
          <div className="date-line">
            <p className="date">25/11/2023</p>
          </div>
          <div className="date-container">
            <p className="day">25</p>
            <p className="month">Nov</p>
          </div>
          <div>
            <p>
              <span className="name-user">Partido - Volleyball</span>

              <p className="descripcion-evento">
                Partido amistoso contra Universidad de El Salvador (UES)
              </p>

              <span className="punto"></span>
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

export default Calendario;

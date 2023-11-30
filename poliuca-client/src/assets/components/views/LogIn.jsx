import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/LogIn.scss";
import Logo from "./../../img/svg/Logo.svg";
import GoogleIcon from "./../../img/svg/google-icon.svg";

const LogIn = (props) => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    navigate("/calendario");
  };

  return (
    <div className="login-view">
      <main className="login-container">
        <figure className="logo-container">
          <img src={Logo} alt="Ícono del PoliUCA" className="logo-poliuca" />
        </figure>
        <h1 className="title">¡Bienvenido!</h1>
        <section className="form-container">
          <p>Ingresa tu información</p>
          <div className="google-btn_container">
            <button type="button" className="google-btn">
              <figure className="google-icon">
                <img src={GoogleIcon} alt="GoogleIcon" />
              </figure>
              Usa tu cuenta UCA
            </button>
          </div>
          <div className="login-separator" />
          <form>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Usuario"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
            />
            <button type="submit" onClick={handleSubmit}>
              Iniciar Sesión
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default LogIn;

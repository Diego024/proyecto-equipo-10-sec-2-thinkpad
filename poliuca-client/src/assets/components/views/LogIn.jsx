import React from "react";
import { useNavigate } from "react-router-dom";
import "./../../css/Login.scss";
import Logo from "./../../img/svg/Logo.svg";
import GoogleLogInButton from "../layout/GoogleLogin";

const LogIn = (props) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // navigate("/calendario");
    alert("Tienes que ingresar con tu correo UCA");
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

          <GoogleLogInButton />

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

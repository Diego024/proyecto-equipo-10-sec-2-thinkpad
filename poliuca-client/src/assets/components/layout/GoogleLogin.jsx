import React from "react";
import GoogleIcon from "./../../img/svg/google-icon.svg";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { redirect, useNavigate } from "react-router";

const GoogleLogInButton = () => {
  const navigate = useNavigate;

  const redirect = () => {
    navigate("/calendario");
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      window.location.href += "calendario";
    },
    onError: (error) => {
      console.error("Error when authenticating: " + error);
    },
    hosted_domain: "uca.edu.sv",
  });

  return (
    <div className="google-btn_container">
      <button type="button" className="google-btn" onClick={loginWithGoogle}>
        <figure className="google-icon">
          <img src={GoogleIcon} alt="GoogleIcon" />
        </figure>
        Usa tu cuenta UCA
      </button>
    </div>
  );
};

export default GoogleLogInButton;

import React from "react";
import GoogleIcon from "./../../img/svg/google-icon.svg";
import { useGoogleLogin } from "@react-oauth/google";

const GoogleLogInButton = () => {
  const GOOGLE_API = "https://www.googleapis.com/oauth2/v2/userinfo";

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => handleSuccessfullLogIn(tokenResponse),
    onError: (error) => {
      console.error("Error when authenticating: " + error);
    },
    hosted_domain: "uca.edu.sv",
  });

  const handleSuccessfullLogIn = async (tokenResponse) => {
    saveInfo(await getUserInfo(tokenResponse.access_token));
    window.location.href += "calendario";
  };

  const getUserInfo = async (accessToken) => {
    return fetch(GOOGLE_API, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((userData) => {
        return userData;
      })
      .catch((error) => {
        console.error("Error al obtener información del usuario:", error);
      });
  };

  const saveInfo = async (userInfo) => {
    const user = {
      picture: userInfo.picture,
      name: userInfo.given_name,
      last_name: userInfo.family_name,
      email: userInfo.email,
    };

    localStorage.setItem("user", JSON.stringify(user));
    console.log("Success");
  };

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

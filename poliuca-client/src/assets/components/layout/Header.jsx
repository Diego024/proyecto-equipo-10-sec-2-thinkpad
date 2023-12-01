import React from "react";
import Logo from "./../icons/Logo";
import CompleteLogo from "./../../img/svg/complete-logo.svg";
import "./../../css/Header.scss";
import MenuIcon from "./../../img/icon/open-menu.png";
import CloseIcon from "./../../img/svg/close-menu.svg";
import CalendarIcon from "./../../img/svg/calendar-icon.svg";
import PoliUcaEventsIcon from "./../../img/svg/poliuca-events_icon.svg";
import PlayersIcon from "./../../img/svg/players.svg";
import WorkOutsIcon from "./../../img/svg/workouts-icon.svg";
import SportEventsIcon from "./../../img/svg/sport-events_icon.svg";
import FollowUpsIcon from "./../../img/svg/follow-ups_icon.svg";
import LogOutIcon from "./../../img/svg/logout-icon.svg";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <>
      <header className="nav">
        <label className="menu-icon_container" for="click">
          <figure>
            <img className="menu-icon" src={MenuIcon} alt="Open menu icon" />
          </figure>
        </label>
        <input type="checkbox" id="click" />
        <ul>
          <label className="close-menu_icon" htmlFor="click">
            <figure>
              <img src={CloseIcon} alt="Close menu icon" />
            </figure>
          </label>

          <div className="nav-separator" />

          <NavItem
            title={"Mi Calendario"}
            icon={CalendarIcon}
            url={"/calendario"}
            alt={"Calendar Icon"}
          />

          <NavItem
            title={"Eventos del PoliUCA"}
            icon={PoliUcaEventsIcon}
            url={""}
            alt={"PoliUCA events icon"}
          />

          <NavItem
            title={"Gestión de deportistas"}
            icon={PlayersIcon}
            url={"/deportistas"}
            alt={"Players icon"}
          />

          <NavItem
            title={"Gestión de entrenamientos"}
            icon={WorkOutsIcon}
            url={"/ejercicios"}
            alt={"Workouts icon"}
          />

          <NavItem
            title={"Gestión de eventos deportivos"}
            icon={SportEventsIcon}
            url={"/gestioneventos"}
            alt={"Sport events icon"}
          />

          <NavItem
            title={"Seguimientos"}
            icon={FollowUpsIcon}
            url={"/seguimientos"}
            alt={"Follow ups icon"}
          />

          <div className="nav-separator" />

          <NavItem
            title={"Cerrar Sesión"}
            icon={LogOutIcon}
            url={"/"}
            alt={"Log out icon"}
          />

          <figure className="nav-logo">
            <img src={CompleteLogo} alt="PoliUCA Logo with text name" />
          </figure>
        </ul>

        <figure className="logo-container">
          <Logo className="logo" />
        </figure>
      </header>
    </>
  );
};

export default Header;

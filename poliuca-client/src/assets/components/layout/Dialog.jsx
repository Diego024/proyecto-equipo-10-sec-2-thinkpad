import React from "react";
import "./../../css/Dialog.scss";
import CloseIcon from "./../../img/svg/close-icon.svg";
import SaveIcon from "./../../img/svg/save-icon.svg";

const Dialog = ({ title, open, onClose = {}, handleSubmit = {}, children }) => {
  return (
    <>
      <div className={`overlay ${open && "open"}`} onClick={onClose} />
      <div className={`dialog ${open && "open"}`}>
        <div className="dialog-header">
          <h1 className="dialog-title">{title}</h1>
          <figure className="dialog-close_icon" onClick={onClose}>
            <img src={CloseIcon} alt="Close Icon" />
          </figure>
        </div>
        <div className="dialog-separator" />
        <div className="dialog-content">{children}</div>
        <div className="dialog-separator" />
        <div className="dialog-actions">
          <button onClick={onClose} className="btn cancel">
            Cancelar
          </button>
          <button onClick={handleSubmit} className="btn submit">
            <img className="save-icon" src={SaveIcon} alt="Save icon" />
            Guardar
          </button>
        </div>
      </div>
    </>
  );
};

export default Dialog;

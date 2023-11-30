import React from "react";
import "./../../css/Input.scss";

const Input = ({ label, placeholder, type, name }) => {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input
        className={`input ${type}`}
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
      />
    </div>
  );
};

export default Input;

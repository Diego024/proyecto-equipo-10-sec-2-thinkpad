import React from "react";
import "./../../css/Input.scss";

const Input = ({ label, placeholder, type, name, children }) => {
  return (
    <div className={`input-container ${type === "select" ? "select" : ""}`}>
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      {type === "select" ? (
        <select className={`input ${type}`} name={name} id={name}>
          {children}
        </select>
      ) : type === "checkbox" ? (
        <div className="checkbox-options">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { name })
          )}
        </div>
      ) : (
        <input
          className={`input ${type}`}
          placeholder={placeholder}
          type={type}
          name={name}
          id={name}
        />
      )}
    </div>
  );
};

export default Input;

import React from "react";
import "./input.css";
import { IInput } from "./input.type";

const Input = ({
  placeholder,
  label,
  value,
  onChange,
  onBlur,
  type = "text",
  autoComplete,
  className
} : IInput) => {
  return (
    <div className={`custom-input ${className}`}>
      <label htmlFor="input">{label}</label>
      <input
        id="input"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        autoComplete={autoComplete}
      />
      <p className="input-validator">{}</p>
    </div>
  );
};

export default Input;

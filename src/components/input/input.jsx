import React from "react";
import "./input.css";

const Input = ({
  placeholder,
  label,
  value,
  onChange,
  onBlur,
  type = "text",
  rules,
  autoComplete,
}) => {
  return (
    <div className="custom-input">
      <label htmlFor="input">{label}</label>
      <input
        id="input"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        rules={rules}
        autoComplete={autoComplete}
      />
      <p className="input-validator">{}</p>
    </div>
  );
};

export default Input;

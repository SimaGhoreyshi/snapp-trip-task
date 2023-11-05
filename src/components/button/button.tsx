import React from "react";

import { IButton } from "./button.type";
import "./button.css";

const Button = ({ children, onClick, disabled, type }: IButton) => {
  return (
    <button
      className="button"
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

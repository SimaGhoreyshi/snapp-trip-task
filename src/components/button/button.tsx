import React from "react";
import { IButton } from "./button.type";

const Button = ({ label, onClick, disabled }: IButton) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;

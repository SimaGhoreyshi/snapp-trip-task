import { FormEvent } from "react";

export interface IInput {
  className: string;
  name: string;
  value?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
  onBlur?: (event: FormEvent<HTMLInputElement>) => void;
}

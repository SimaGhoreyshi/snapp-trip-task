import { FormEvent } from "react";

export interface IInput {
  name: string;
  value: string;
  type?: string;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  onBlur?: (e: FormEvent<HTMLInputElement>) => void;
}

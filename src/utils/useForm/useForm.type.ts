import { ChangeEvent, FormEvent } from "react";

export type Data = {
  [key: string]: string;
};

export type Errors = {
  [key: string]: string;
};

export type Touched = {
  [key: string]: boolean;
};

export interface IUseForm {
  data?: Data | undefined;
  errors?: Errors;
  touched?: Touched;
  setTouched: (touched: object) => void;
  isSubmitting?: boolean;
  handleChange?: (field: string, event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

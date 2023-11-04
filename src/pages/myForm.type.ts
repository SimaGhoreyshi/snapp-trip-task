export interface IMyForm {
  data: object;
  errors: object;
  touched: object;
  isSubmitting: boolean;
  handleChange: (event: HTMLFormElement) => void;
  handleBlur: (event: HTMLFormElement) => void;
  handleSubmit: (event: HTMLFormElement) => void;
}

import { FormEvent, InputHTMLAttributes, useState } from "react";
import { rules } from "./validationRules";
import { validatorMessages } from "./validatorMessages";

const useForm = ({ initialData: {} = {} }) => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement; //field name and field value

    setData({ ...data, [field]: value });

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleBlur = (event: FormEvent<HTMLInputElement>) => {
    const { name } = event.target as HTMLInputElement;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(data));
    setIsSubmitting(false);
  };

  const validate = (data: object) => {
    const errors = {};

    Object.keys(data).forEach((dataKey) => {
      const dataTest = new RegExp(rules[dataKey]).test(data[dataKey]);
      if (!dataTest) {
        errors[dataKey] = validatorMessages[dataKey];
      }
    });
    console.log(errors);

    return errors;
  };

  return {
    data,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useForm;

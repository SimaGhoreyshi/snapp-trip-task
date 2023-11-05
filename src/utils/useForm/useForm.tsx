import { FormEvent, useState } from "react";
import { rules } from "../validationRules";
import { validatorMessages } from "../validatorMessages";
import { Data, Errors, IUseForm, Touched } from "./useForm.type";

const useForm = (props?: IUseForm) => {
  const [data, setData] = useState<Data | undefined>(props?.data || {});
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Touched>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSubmitting(false);
    if (data) {
      setErrors(validate(data));
    }
  };

  const validate = (data: Data): Errors => {
    const errors = {};

    Object.keys(data).forEach((dataKey) => {
      const dataTest = new RegExp(rules[dataKey]).test(data[dataKey]);
      if (!dataTest) {
        errors[dataKey] = validatorMessages[dataKey];
      }
    });

    return errors;
  };

  return {
    data,
    errors,
    touched,
    isSubmitting,
    setErrors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useForm;

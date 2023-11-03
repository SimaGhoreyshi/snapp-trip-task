import { useState } from "react";
import { rules } from "./validationRules";
import { validatorMessages } from "./validatorMessages";

const useForm = (initialData = {}) => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, event) => {
    const { name, value } = event.target; //field name and field value

    setData({ ...data, [field]: value });

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(data));
    setIsSubmitting(false);
  };

  const validate = (data) => {
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

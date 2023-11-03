import React from "react";
import useForm from "../utils/useForm";
import Input from "../components/input/input";
import { email, firstName, rules } from "../utils/validationRules";

const MyForm = () => {
  const {
    data,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({
    name: "",
    email: "",
  });
  console.log(errors);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label={"نام"}
        onChange={(event) => handleChange("firstName", event)}
        onBlur={handleBlur}
        name="firstName"
        value={data.firstName}
        type="text"
        rules={rules.firstName}
      />

      {touched.name && errors.name && <div>{errors.name}</div>}

      <Input
        label={"ایمیل"}
        type="email"
        name="email"
        value={data.email}
        onChange={(event) => handleChange("email", event)}
        onBlur={handleBlur}
        rules={rules.email}
      />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <button type="submit" disabled={isSubmitting}>
        ثبت
      </button>
    </form>
  );
};

export default MyForm;

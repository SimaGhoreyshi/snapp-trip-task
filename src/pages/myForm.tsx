import React from "react";

import "./myForm.css";
import useForm from "../utils/useForm/useForm.tsx";
import Input from "../components/input/input.tsx";
import Button from "../components/button/button.tsx";
import { IUseForm } from "../utils/useForm/useForm.type.ts";

const MyForm = ({ formData }: { formData?: IUseForm | undefined }) => {
  const {
    data,
    errors,
    setErrors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(formData);

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <Input
        className="form-input"
        label={"نام"}
        onChange={(event) => handleChange("firstName", event)}
        onBlur={handleBlur}
        name="firstName"
        value={data?.firstName}
        type="text"
      />
      <Input
        className="form-input"
        label={"نام خانوادگی"}
        onChange={(event) => handleChange("lastName", event)}
        onBlur={handleBlur}
        name="lastName"
        value={data?.lastName}
        type="text"
      />

      <Input
        className="form-input"
        label={"ایمیل"}
        type="email"
        name="email"
        value={data?.email}
        onChange={(event) => handleChange("email", event)}
        onBlur={handleBlur}
      />

      <Input
        className="form-input"
        label={"موبایل"}
        onChange={(event) => handleChange("mobile", event)}
        onBlur={handleBlur}
        name="mobile"
        value={data?.mobile}
        type="phone"
      />
      {Object.keys(touched).length && Object.keys(errors).length ? (
        <div className="form-errors">
          {Object.values(errors).map((error) => (
            <p>{error}</p>
          ))}
          <Button onClick={() => setErrors({})}>تایید</Button>
        </div>
      ) : null}

      <Button type="submit" disabled={isSubmitting}>
        ثبت
      </Button>
    </form>
  );
};

export default MyForm;

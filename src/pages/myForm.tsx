import React from "react";

import "./myForm.css";
import useForm from "../utils/useForm";
import Input from "../components/input/input";

const MyForm = (initialData) => {
  const {
    data,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialData);

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <Input
        label={"نام"}
        onChange={(event) => handleChange("firstName", event)}
        onBlur={handleBlur}
        name="firstName"
        value={data.firstName}
        type="text"
      />
      <Input
        label={"نام خانوادگی"}
        onChange={(event) => handleChange("lastName", event)}
        onBlur={handleBlur}
        name="lastName"
        value={data.lastName}
        type="text"
      />

      <Input
        label={"ایمیل"}
        type="email"
        name="email"
        value={data.email}
        onChange={(event) => handleChange("email", event)}
        onBlur={handleBlur}
      />

      <Input
        label={"موبایل"}
        onChange={(event) => handleChange("mobile", event)}
        onBlur={handleBlur}
        name="mobile"
        value={data.mobile}
        type="text"
      />
      {/* {touched.email && errors.email && <div>{errors.email}</div>} */}

      <button type="submit" disabled={isSubmitting}>
        ثبت
      </button>
    </form>
  );
};

export default MyForm;

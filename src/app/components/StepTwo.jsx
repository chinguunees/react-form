"use client";
import { InputArea } from "./InputArea";

export const StepTwo = ({
  handleChange,
  formData,
  errors,
  error,
  label,
  initialValues,
}) => {
  return (
    <div>
      <InputArea
        handleChange={handleChange}
        formData={formData.firstName}
        error={error.firstName}
        label="E-Mail"
        initialValues="eMail"
      />
      <InputArea
        handleChange={handleChange}
        formData={formData.lastName}
        error={error.lastName}
        label="Phone Number"
        initialValues="phoneNumber"
      />
      <InputArea
        handleChange={handleChange}
        formData={formData.userName}
        error={error.userName}
        label="Password"
        initialValues={"passWord"}
      />
      <InputArea
        handleChange={handleChange}
        formData={formData.userName}
        error={error.userName}
        label="Confirm Password"
        initialValues={"confirmPassword"}
      />
    </div>
  );
};

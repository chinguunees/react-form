"use client";
import { InputArea } from "./InputArea";

export const StepOne = ({ formData, handleChange, error }) => {
  return (
    <div>
      <InputArea
        handleChange={handleChange}
        formData={formData.firstName}
        error={error.firstName}
        label="First Name"
        initialValues="firstName"
      />
      <InputArea
        handleChange={handleChange}
        formData={formData.lastName}
        error={error.lastName}
        label="Last Name"
        initialValues="lastName"
      />
      <InputArea
        handleChange={handleChange}
        formData={formData.userName}
        error={error.userName}
        label="User Name"
        initialValues={"userName"}
      />
    </div>
  );
};

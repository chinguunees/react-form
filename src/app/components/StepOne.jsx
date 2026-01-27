"use client";
import { useState } from "react";
import { ContinueButtons } from "./ContinueButtons";
import { InputArea } from "./InputArea";

export const StepOne = ({
  formData,
  handleChange,
  error,
  updateError,
  nextStep,
}) => {
  const onValidation = () => {
    const newErrors = {};
    if (formData.firstName === "") {
      newErrors.firstName = "Нэрээ оруулна уу.";
    }
    if (formData.lastName === "") {
      newErrors.lastName = "Овогоо оруулна уу.";
    }
    if (formData.userName === "") {
      newErrors.userName = "Нэвтрэх нэрээ оруулна уу.";
    }

    const isValid = Object.keys(newErrors).length === 0;

    return { isValid, newErrors };
  };

  const onSubmit = () => {
    const { isValid, newErrors } = onValidation();

    if (isValid) {
      nextStep();
    }

    updateError(newErrors);
  };
  return (
    <div>
      <div className="mb-7">
        <img src="/logo.svg" alt="" />
        <h1 className="text-[#202124] text-[26px]">Join Us! 😎</h1>
        <p className="text-[#8E8E8E] text-[18px]">
          Please provide all current information accurately.
        </p>
      </div>
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
      <div className="flex items-center justify-center w-[416px] pt-[40px]">
        <ContinueButtons onSubmit={onSubmit} />
      </div>
    </div>
  );
};

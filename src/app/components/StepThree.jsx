"use client";
import { InputArea } from "./InputArea";
import { ContinueButtons } from "./ContinueButtons";
import { InputPassword } from "./InputPassword";
import { InputDate } from "./InputDate";
import { InputFile } from "./InputFile";
import { BackButtons } from "./BackButton";

export const StepThree = ({
  handleChange,
  formData,
  error,
  updateError,
  nextStep,
  prevStep,
}) => {
  const onValidation2 = () => {
    const newErrors = {};
    if (formData.date === "") {
      newErrors.date = "Зөв хугацаа оруулна уу.";
    }

    const isValid = Object.keys(newErrors).length === 0;

    return { isValid, newErrors };
  };

  const onSubmit = () => {
    const { isValid, newErrors } = onValidation2();

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
      <InputDate
        handleChange={handleChange}
        formData={formData.eMail}
        error={error.eMail}
        label="Date"
        initialValues="eMail"
      />
      <InputFile
        handleChange={handleChange}
        formData={formData.date}
        error={error.eMail}
        label="Photo"
        initialValues="eMail"
      />
      <div className="flex pt-[40px]">
        <BackButtons prevStep={prevStep} />
        <ContinueButtons onSubmit={onSubmit} />
      </div>
    </div>
  );
};

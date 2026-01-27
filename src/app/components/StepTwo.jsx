"use client";
import { InputArea } from "./InputArea";
import { ContinueButtons } from "./ContinueButtons";
import { InputPassword } from "./InputPassword";
import { BackButtons } from "./BackButton";

export const StepTwo = ({
  handleChange,
  formData,
  error,
  updateError,
  nextStep,
  prevStep,
}) => {
  const onValidation2 = () => {
    const newErrors = {};
    if (formData.eMail === "") {
      newErrors.eMail = "И-мэйл хаягаа оруулна уу.";
    }
    if (formData.phoneNumber === "") {
      newErrors.phoneNumber = "Утасны дугаараа оруулна уу.";
    }
    if (formData.passWord === "") {
      newErrors.passWord = "Нууц үгээ оруулна уу.";
    }
    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Нууц үгээ оруулна уу.";
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
      <InputArea
        handleChange={handleChange}
        formData={formData.eMail}
        error={error.eMail}
        label="E-Mail"
        initialValues="eMail"
      />
      <InputArea
        handleChange={handleChange}
        formData={formData.phoneNumber}
        error={error.phoneNumber}
        label="Phone Number"
        initialValues="phoneNumber"
      />
      <InputPassword
        handleChange={handleChange}
        formData={formData.passWord}
        error={error.passWord}
        label="Password"
        initialValues={"passWord"}
      />
      <InputPassword
        handleChange={handleChange}
        formData={formData.confirmPassword}
        error={error.confirmPassword}
        label="Confirm Password"
        initialValues={"confirmPassword"}
      />
      <div className="flex pt-[40px]">
        <BackButtons prevStep={prevStep} />
        <ContinueButtons onSubmit={onSubmit} />
      </div>
    </div>
  );
};

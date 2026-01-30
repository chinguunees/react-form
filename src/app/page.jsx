"use client";
import { InputArea } from "./components/InputArea";
import { ContinueButtons } from "./components/ContinueButtons";

import { useRef, useState } from "react";
import { StepOne } from "./components/StepOne";
import { StepThree } from "./components/StepThree";
import { StepTwo } from "./components/StepTwo";
import { motion } from "framer-motion";
import { Transition } from "./components/Transition";
import { StepFour } from "./components/StepFour";
const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  eMail: "",
  phoneNumber: "",
  passWord: "",
  confirmPassword: "",
  date: "",
  image: "",
};

export default function Home() {
  const [formData, setFormData] = useState(initialValues);
  const [error, setError] = useState(initialValues);
  const [step, setStep] = useState(1);
  const [image, setImage] = useState(null);
  const fileUploadRef = useRef();

  const uploadFile = () => {
    setImage(fileUploadRef.current.files[0]);
  };

  const uploadAgain = () => {
    fileUploadRef.current.click();
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const updateError = (newError) => {
    setError({ ...error, ...newError });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const cancelImage = () => {
    setImage(null);
  };

  return (
    <div className="flex items-center justify-center mt-50 dark:bg-[#242424]">
      <div className="flex flex-col bg-white h-100% w-[480px] rounded-[8px] items-start pb-[32px] shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] dark:bg-[#373737] ">
        <div className="ml-[32px] mt-[32px]">
          {step === 1 && (
            <Transition>
              <StepOne
                handleChange={handleChange}
                updateError={updateError}
                formData={formData}
                error={error}
                label="First Name"
                initialValues="firstName"
                InputArea={InputArea}
                nextStep={nextStep}
              />
            </Transition>
          )}
          {step === 2 && (
            <Transition>
              <StepTwo
                handleChange={handleChange}
                updateError={updateError}
                formData={formData}
                error={error}
                label="E-Mail"
                InputArea={InputArea}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            </Transition>
          )}
          {step === 3 && (
            <Transition>
              <StepThree
                handleChange={handleChange}
                updateError={updateError}
                uploadAgain={uploadAgain}
                formData={formData}
                error={error}
                label="Date"
                InputArea={InputArea}
                nextStep={nextStep}
                prevStep={prevStep}
                uploadFile={uploadFile}
                image={image}
                fileUploadRef={fileUploadRef}
                cancelImage={cancelImage}
              />
            </Transition>
          )}
          {step === 4 && (
            <Transition>
              <StepFour formData={formData} />
            </Transition>
          )}

          {/* <ContinueButtons onSubmit={onSubmit} /> */}
        </div>
      </div>
    </div>
  );
}

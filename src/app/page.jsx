"use client";
import { InputArea } from "./components/InputArea";
import { ContinueButtons } from "./components/ContinueButtons";

import { useState } from "react";
import { StepOne } from "./components/StepOne";
import { StepThree } from "./components/StepThree";
import { StepTwo } from "./components/StepTwo";
import { motion } from "framer-motion";
import { Transition } from "./components/Transition";
const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  eMail: "",
  phoneNumber: "",
  passWord: "",
  confirmPassword: "",
  date: "",
};

export default function Home() {
  const [formData, setFormData] = useState(initialValues);
  const [error, setError] = useState(initialValues);
  const [step, setStep] = useState(1);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
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

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col bg-white h-100% w-[480px] rounded-[8px] items-start pb-[32px] shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
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
                formData={formData}
                error={error}
                label="Date"
                InputArea={InputArea}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            </Transition>
          )}
          {step === 4 && (
            <Transition>
              <div>
                <img src="/logo.svg" alt="" />
                <h1 className="text-[#202124] text-[26px]">
                  You're all set 🔥
                </h1>
                <p className="text-[#8E8E8E] text-[18px]">
                  We have received your submission. Thank you!
                </p>
              </div>
            </Transition>
          )}

          {/* <ContinueButtons onSubmit={onSubmit} /> */}
        </div>
      </div>
    </div>
  );
}

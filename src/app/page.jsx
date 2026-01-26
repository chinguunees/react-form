"use client";
import { InputArea } from "./components/InputArea";
import { ContinueButtons } from "./components/ContinueButtons";

import { useState } from "react";
import { StepOne } from "./components/StepOne";
// import { StepThree } from "./components/StepThree";
import { StepTwo } from "./components/StepTwo";

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
};

// const components = [StepOne, StepTwo, StepThree];
// const Stepper = components[index];

export default function Home() {
  const [formData, setFormData] = useState(initialValues);
  const [error, setError] = useState(initialValues);
  const [index, setIndex] = useState(0);

  const continueButton = () => {
    setIndex((prev) => prev + 1);
  };

  const handleChange = (event) => {
    console.log(event.target.name);

    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  console.log(formData);
  const onSubmit = () => {
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
    setIndex((prev) => prev + 1);
    setError(newErrors);

    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col bg-white h-[655px] w-[480px] rounded-[8px] items-start">
        <div className="ml-[32px] mt-[32px]">
          <div className="mb-7">
            <img src="/logo.svg" alt="" />
            <h1 className="text-[#202124] text-[26px]">Join Us! 😎</h1>
            <p className="text-[#8E8E8E] text-[18px]">
              Please provide all current information accurately.
            </p>
          </div>
          <StepOne
            handleChange={handleChange}
            formData={formData}
            error={error}
            label="First Name"
            initialValues="firstName"
            InputArea={InputArea}
          />

          <ContinueButtons onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

// const Home = () => {
//   const components = [StepOne, StepTwo, StepThree];

// const [index, setIndex] = useState(0);
// const Stepper = components[index];
// const continueButton = () => {
//   setIndex((prev) => prev + 1);
// };
// return (
//   <div className="text-black">
//     <Stepper />
//     <button onClick={continueButton}>Add</button>
//   </div>
// );

// export default Home;

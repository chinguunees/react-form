"use client";
import { InputArea } from "./components/InputArea";
import { ContinueButtons } from "./components/ContinueButtons";
import { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
};

export default function Home() {
  const [formData, setFormData] = useState(initialValues);
  const [error, setError] = useState(initialValues);

  const handleChange = (event) => {
    console.log(event.target.name);

    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  console.log(formData);

  const onSubmit = () => {
    const newErrors = {};
    if (formData.firstName === "") {
      newErrors.firstName = "Must be Filled";
    }
    if (formData.lastName === "") {
      newErrors.lastName = "Must be Filled";
    }
    if (formData.userName === "") {
      newErrors.userName = "Must be Filled";
    }

    setError(newErrors);

    console.log(formData);

    // setError(isValid);
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
          <ContinueButtons onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

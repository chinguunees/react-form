"use client";

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
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    if (formData.firstName === "") {
      setError({
        ...error,
        firstName: "hooson bj bolohgui",
      });
    }
  };

  return (
    <div className="flex flex-col bg-white h-[655px] w-[480px] rounded-[8px] items-start">
      <div className="ml-[32px] mt-[32px]">
        <div className="mb-7">
          <img src="/logo.svg" alt="" />
          <h1 className="text-[#202124] text-[26px]">Join Us! 😎</h1>
          <p className="text-[#8E8E8E] text-[18px]">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="mt-3 mb-3">
          <p className="font-semibold text-[14px] text-[#334155]">First Name</p>
          <input
            className="border rounded-[8px] w-[416px] h-[44px] mt-2 pl-3 placeholder:text-[#8B8E95] text-black "
            type="text"
            placeholder="Placeholder"
            value={formData.firstName}
            name="firstName"
            onChange={handleChange}
          />
          <p className="text-red-500">{error.firstName}</p>
        </div>
        <div className="mt-3 mb-3">
          <p className="font-semibold text-[14px] text-[#334155]">Last Name</p>
          <input
            className="border rounded-[8px] w-[416px] h-[44px] mt-2 pl-3 placeholder:text-[#8B8E95] text-black"
            type="text"
            placeholder="Placeholder"
            value={formData.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="mt-3 mb-3">
          <p className="font-semibold text-[14px] text-[#334155]">Username</p>
          <input
            className="border rounded-[8px] w-[416px] h-[44px] mt-2 pl-3 placeholder:text-[#8B8E95] text-black"
            type="text"
            placeholder="Placeholder"
            value={formData.userName}
            name="userName"
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-[#121316] text-white w-[416px] h-[44px] rounded-[8px]"
          onClick={onSubmit}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

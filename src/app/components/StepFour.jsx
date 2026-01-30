"use client";
export const StepFour = ({ formData }) => {
  console.log("all data:", formData);

  return (
    <div>
      <img src="/logo.svg" alt="" />
      <h1 className="text-[#202124] text-[26px] dark:text-white ">
        You're all set 🔥
      </h1>
      <p className="text-[#8E8E8E] text-[18px]">
        We have received your submission. Thank you!
      </p>
    </div>
  );
};

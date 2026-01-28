export const InputArea = ({
  handleChange,
  formData,
  error,
  label,
  initialValues,
}) => {
  return (
    <div className="mt-3 mb-3">
      <p className="font-semibold text-[14px] text-[#334155] dark:text-white ">
        {label} <label className="text-red-500 dark:text-[#f46036] ">*</label>
      </p>

      <input
        className={`border  rounded-[8px] w-[416px] h-[44px] mt-2 pl-3 placeholder:text-[#8B8E95] ${error ? "border-red-500" : ""} text-black dark:text-white dark:border-[#5b5b5b] `}
        type="text"
        placeholder="Placeholder"
        value={formData}
        name={initialValues}
        onChange={handleChange}
      />
      <p className="text-red-500 dark:text-[#f46036] ">{error}</p>
    </div>
  );
};

export const InputArea = ({
  handleChange,
  formData,
  error,
  label,
  initialValues,
}) => {
  return (
    <div className="mt-3 mb-3">
      <p className="font-semibold text-[14px] text-[#334155]">
        {label} <label className="text-red-500">*</label>
      </p>

      <input
        className={`border  rounded-[8px] w-[416px] h-[44px] mt-2 pl-3 placeholder:text-[#8B8E95] ${error ? "border-red-500" : ""} text-black `}
        type="text"
        placeholder="Placeholder"
        value={formData}
        name={initialValues}
        onChange={handleChange}
      />
      <p className="text-red-500">{error}</p>
    </div>
  );
};

export const InputFile = ({ handleChange, error, label, initialValues }) => {
  return (
    <div className="mt-3 mb-3">
      <p className="font-semibold text-[14px] text-[#334155]">
        {label} <label className="text-red-500">*</label>
      </p>

      <input
        className={`border text-center rounded-[8px] w-[416px] h-[180px] file:bg-gray-300 file:rounded-4xl file:w-50 file:h-10 file:mt-17 mt-2 pl-3 placeholder:text-[#8B8E95] ${error ? "border-red-500" : ""} text-black `}
        type="file"
        placeholder="Placeholder"
        value=""
        name={initialValues}
        onChange={handleChange}
      />
      <p className="text-red-500">{error}</p>
    </div>
  );
};

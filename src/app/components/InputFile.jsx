export const InputFile = ({
  handleChange,
  error,
  label,
  initialValues,
  fileUploadRef,
  uploadFile,
  uploadAgain,
  image,
  cancelImage,
}) => {
  return (
    <div className="mt-3 mb-3">
      <p className="font-semibold text-[14px] text-[#334155] dark:text-white">
        {label} <label className="text-red-500 dark:text-[#f46036]">*</label>
      </p>
      <div>
        <input
          className={`${image && "hidden"} border text-center rounded-[8px] w-[416px] h-[180px] file:bg-gray-300 file:rounded-4xl file:w-50 file:h-10 file:mt-17 mt-2 pl-3 placeholder:text-[#8B8E95] ${error ? "border-red-500" : ""} text-black `}
          type="file"
          placeholder="Placeholder"
          ref={fileUploadRef}
          value=""
          name={initialValues}
          onChange={uploadFile}
        />
        {image && (
          <div className="">
            <button
              onClick={cancelImage}
              className="absolute ml-95 mt-2 bg-[#f46036] h-6 w-6 rounded-[6px] text-center "
            >
              X
            </button>
            <img
              className="w-[416px] h-[180px] rounded-[8px]  object-cover bg-center"
              src={URL.createObjectURL(image)}
              alt=""
              onClick={uploadAgain}
            />
          </div>
        )}
      </div>
      <p className="text-red-500 dark:text-[#f46036]">{error}</p>
    </div>
  );
};

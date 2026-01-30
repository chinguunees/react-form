export const BackButtons = ({ prevStep }) => {
  return (
    <div>
      <button
        className="bg-white border text-black w-[128px] h-[44px] rounded-[8px] dark:border-0 "
        onClick={prevStep}
      >
        Back
      </button>
    </div>
  );
};

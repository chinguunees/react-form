export const ContinueButtons = ({ onSubmit }) => {
  return (
    <div>
      <button
        className="bg-[#121316] text-white w-[280px] h-[44px] rounded-[8px] dark:bg-[#ffffff] dark:text-[#242424] dark:hover:bg-[#ee6c4d] dark:hover:text-white dark:transition  dark:duration-150 "
        onClick={onSubmit}
      >
        Continue
      </button>
    </div>
  );
};

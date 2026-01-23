export const ContinueButtons = ({ onSubmit }) => {
  return (
    <div>
      <button
        className="bg-[#121316] text-white w-[416px] h-[44px] rounded-[8px]"
        onClick={onSubmit}
      >
        Continue
      </button>
      ;
    </div>
  );
};

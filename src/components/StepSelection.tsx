interface StepSelectionProps {
  StepNumber: number;
  StepMainText: string;
  StepText: string;
  isActive?: boolean;
}

function StepSelection({
  StepNumber,
  StepText,
  StepMainText,
  isActive,
}: StepSelectionProps) {
  return (
    <>
      <div className="sm:w-full w-max h-max px-2 flex items-center gap-4 text-lg">
        <div
          className={`aspect-square sm:h-3/4 h-10 ${
            isActive ? "bg-LightBlue border-transparent" : "text-white"
          } border-[1px] text-MarineBlue border-white text-center rounded-full text-xl grid place-items-center`}
        >
          {StepNumber}
        </div>
        <div className="uppercase sm:block hidden">
          <h3 className="text-sm text-LightGray/90">{StepMainText}</h3>
          <h1 className="md:text-lg text-base font-bold tracking-wide">
            {StepText}
          </h1>
        </div>
      </div>
    </>
  );
}

export default StepSelection;

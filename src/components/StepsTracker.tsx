import StepSelection from "./StepSelection";
import { useMediaQuery } from "@uidotdev/usehooks";

interface StepSelectionProps {
  currentStep: number;
  FinalStep: boolean;
}

function StepsTracker({ currentStep, FinalStep }: StepSelectionProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div
      className={`${
        isMobile ? "bg-mobile" : "bg-desktop"
      } bg-no-repeat bg-center bg-cover lg:w-4/12 sm:w-6/12 w-full sm:h-full h-1/3 sm:rounded-2xl rounded-none py-10 lg:px-6 px-4 flex sm:flex-col flex-row sm:justify-start justify-center gap-8`}
    >
      <StepSelection
        StepNumber={1}
        StepMainText="Step 1"
        StepText="Your Info"
        isActive={currentStep + 1 === 1 || FinalStep}
      />
      <StepSelection
        StepNumber={2}
        StepMainText="Step 2"
        StepText="Select plan"
        isActive={currentStep + 1 === 2 || FinalStep}
      />
      <StepSelection
        StepNumber={3}
        StepMainText="Step 3"
        StepText="Add-ons"
        isActive={currentStep + 1 === 3 || FinalStep}
      />
      <StepSelection
        StepNumber={4}
        StepMainText="Step 4"
        StepText="Summary"
        isActive={currentStep + 1 === 4 || FinalStep}
      />
    </div>
  );
}

export default StepsTracker;

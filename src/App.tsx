import "./App.css";
import Step1 from "./pages/Step1";
import StepsTracker from "./components/StepsTracker";
import { useState } from "react";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import FinalStep from "./pages/FinalStep";
import { AnimatePresence } from "framer-motion";

function App() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    yearly: false,
    plan: "",
    addOns: {
      OnlineService: false,
      LargerStorage: false,
      CustomizableProfile: false,
    },
  });
  const [currentStep, setCurrentStep] = useState(0);
  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  const handleFinalStep = () => {
    setCurrentStep(steps.length - 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const steps = [
    <Step1
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      onNext={handleNextStep}
    />,
    <Step2
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      onNext={handleNextStep}
    />,
    <Step3
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      onNext={handleNextStep}
    />,
    <Step4
      userInfo={userInfo}
      onNext={handleFinalStep}
      setStep={() => setCurrentStep(1)}
    />,
    <FinalStep />,
  ];
  return (
    <>
      <div className="shadow-2xl m-auto max:w-4/6 w-[60rem] sm:flex-row flex-col sm:h-5/6 h-full bg-white sm:rounded-3xl flex sm:p-4 p-0 gap-4 overflow-hidden relative">
        <StepsTracker
          currentStep={currentStep}
          FinalStep={currentStep === steps.length - 1}
        />

        <div
          className={`lg:w-10/12 sm:w-8/12 w-[90%] m-auto sm:shadow-none shadow-xl sm:translate-y-0 sm:translate-x-0 left-1/2 sm:left-0 -translate-x-1/2 sm:bottom-0 bottom-10 sm:h-full h-[80%] bg-slate-50 rounded-xl lg:px-16 px-10 py-10 absolute sm:relative`}
        >
          <AnimatePresence>{steps[currentStep]}</AnimatePresence>
          {currentStep !== 0 && currentStep !== steps.length - 1 && (
            <button
              className={
                " text-CoolGray rounded-xl py-3 px-6 absolute sm:bottom-12 bottom-5  left-1/5 cursor-pointer hover:text-MarineBlue transition-all"
              }
              onClick={handlePrevStep}
            >
              Go Back
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

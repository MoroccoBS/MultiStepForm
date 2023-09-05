import { motion } from "framer-motion";
import Button from "../components/Button";

interface Step4Props {
  userInfo: {
    name: string;
    email: string;
    phone: string;
    plan: string;
    yearly: boolean;
    addOns: {
      OnlineService: boolean;
      LargerStorage: boolean;
      CustomizableProfile: boolean;
    };
  };
  onNext: () => void;
  setStep: () => void;
}

function Step4({ userInfo, onNext, setStep }: Step4Props) {
  const addOns = Object.entries(userInfo.addOns).filter(
    ([, value]) => value === true
  );

  const Total = () => {
    let total = 0;
    addOns.map((addOn) => {
      if (addOn[0] === "OnlineService") {
        total += 1;
      } else {
        total += 2;
      }
    });
    if (userInfo.plan === "Pro") {
      total += 15;
    } else if (userInfo.plan === "Advanced") {
      total += 12;
    } else {
      total += 9;
    }
    return userInfo.yearly ? total * 10 : total;
  };

  const handleSubmit = () => {
    onNext();
  };
  return (
    <motion.div
      className="w-full h-max flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-3xl text-MarineBlue font-bold ">Finishing up</h1>
        <p className="text-base text-CoolGray">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="p-6 rounded-lg w-full h-full bg-Magnolia flex flex-col gap-6 mt-10 text-CoolGray">
        <div
          className={`w-full flex justify-between items-center ${
            addOns.length > 0 && "after"
          } relative mb-4`}
        >
          <div>
            <h1 className="text-lg text-MarineBlue font-medium">
              {userInfo.plan}({userInfo.yearly ? "Yearly" : "Monthly"})
            </h1>
            <div
              className="underline cursor-pointer hover:text-PurplishBlue transition-all"
              onClick={setStep}
            >
              Change
            </div>
          </div>
          {userInfo.yearly ? (
            <p className="font-bold text-MarineBlue">
              {userInfo.plan === "Pro"
                ? "$150"
                : userInfo.plan === "Advanced"
                ? "$120"
                : "$90"}
              /yr
            </p>
          ) : (
            <p className="font-bold text-MarineBlue">
              {userInfo.plan === "Pro"
                ? "$15"
                : userInfo.plan === "Advanced"
                ? "$12"
                : "$9"}
              /mo
            </p>
          )}
        </div>
        {addOns.map((addOn) => (
          <div
            key={crypto.randomUUID()}
            className="w-full flex justify-between items-center"
          >
            <h1>{addOn}</h1>
            {addOn[0] === "OnlineService" ? (
              <p className="text-MarineBlue">
                {userInfo.yearly ? "+$10/yr" : "+$1/mo"}
              </p>
            ) : (
              <p className="text-MarineBlue">
                {userInfo.yearly ? "+$20/yr" : "+$2/mo"}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="w-full px-6 mt-6 flex justify-between items-center">
        <h1 className="text-lg text-CoolGray">
          Total (per {userInfo.yearly ? "year" : "month"})
        </h1>
        <h1 className="text-3xl text-PurplishBlue font-bold ">
          +{Total()}
          {userInfo.yearly ? "/yr" : "/mo"}
        </h1>
      </div>
      <Button onClick={handleSubmit}></Button>
    </motion.div>
  );
}

export default Step4;

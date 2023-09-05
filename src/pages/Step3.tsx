import { motion } from "framer-motion";
import AddOn from "../components/AddOn";
import Button from "../components/Button";

interface Step3Props {
  setUserInfo: React.Dispatch<
    React.SetStateAction<{
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
    }>
  >;
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
}

function Step3({ setUserInfo, onNext, userInfo }: Step3Props) {
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
        <h1 className="text-3xl text-MarineBlue font-bold ">Pick add-ons</h1>
        <p className="text-base text-CoolGray">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-6">
        <AddOn
          active={userInfo.addOns.OnlineService}
          Heading="Online service"
          Price={userInfo.yearly ? "+$10/yr" : "+$1/mo"}
          Description="Access to multiplayer games"
          onClick={() => {
            setUserInfo((prevUserInfo) => ({
              ...prevUserInfo,
              addOns: {
                ...prevUserInfo.addOns,
                OnlineService: !prevUserInfo.addOns.OnlineService,
              },
            }));
          }}
        />
        <AddOn
          active={userInfo.addOns.LargerStorage}
          Heading="Larger storage"
          Price={userInfo.yearly ? "+$20/yr" : "+$2/mo"}
          Description="Extra 1TB of cloud save"
          onClick={() => {
            setUserInfo((prevUserInfo) => ({
              ...prevUserInfo,
              addOns: {
                ...prevUserInfo.addOns,
                LargerStorage: !prevUserInfo.addOns.LargerStorage,
              },
            }));
          }}
        />
        <AddOn
          active={userInfo.addOns.CustomizableProfile}
          Heading="Customizable Profile"
          Price={userInfo.yearly ? "+$20/yr" : "+$2/mo"}
          Description="Custom theme on your profile"
          onClick={() => {
            setUserInfo((prevUserInfo) => ({
              ...prevUserInfo,
              addOns: {
                ...prevUserInfo.addOns,
                CustomizableProfile: !prevUserInfo.addOns.CustomizableProfile,
              },
            }));
          }}
        />
      </div>
      <Button onClick={handleSubmit}></Button>
    </motion.div>
  );
}

export default Step3;

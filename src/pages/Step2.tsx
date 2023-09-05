import { motion } from "framer-motion";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";
import Plan from "../components/Plan";
import Button from "../components/Button";

interface Step2Props {
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

function Step2({ setUserInfo, onNext, userInfo }: Step2Props) {
  // const plans = [
  //   {
  //     image: Arcade,
  //     heading: "Arcade",
  //     price: "$9",
  //     yearlyPrice: "$90",
  //     key: "planArcade",
  //   },
  //   {
  //     image: Advanced,
  //     heading: "Advanced",
  //     price: "$12",
  //     yearlyPrice: "$120",
  //     key: "planAdvanced",
  //   },
  //   {
  //     image: Pro,
  //     heading: "Pro",
  //     price: "$15",
  //     yearlyPrice: "$150",
  //     key: "planPro",
  //   },
  // ];

  const onSubmit = () => {
    if (!userInfo.plan) {
      return;
    }
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
        <h1 className="text-3xl text-MarineBlue font-bold ">
          Select your plan
        </h1>
        <p className="text-base text-CoolGray">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="w-full h-52 flex sm:flex-row flex-col sm:gap-6 gap-3 sm:mt-10 mt-4 ">
        <Plan
          image={Arcade}
          Heading="Arcade"
          Price={userInfo.yearly ? "$90/yr" : "$9/mo"}
          Yearly={userInfo.yearly}
          onClick={() =>
            setUserInfo((prevUserInfo) => ({
              ...prevUserInfo,
              plan: prevUserInfo.plan === "Arcade" ? "" : "Arcade",
            }))
          }
          active={userInfo.plan === "Arcade"}
        />
        <Plan
          image={Advanced}
          Heading="Advanced"
          Price={userInfo.yearly ? "$120/yr" : "$12/mo"}
          Yearly={userInfo.yearly}
          onClick={() =>
            setUserInfo((prevUserInfo) => ({
              ...prevUserInfo,
              plan: prevUserInfo.plan === "Advanced" ? "" : "Advanced",
            }))
          }
          active={userInfo.plan === "Advanced"}
        />
        <Plan
          image={Pro}
          Heading="Pro"
          Price={userInfo.yearly ? "$150/yr" : "$15/mo"}
          Yearly={userInfo.yearly}
          onClick={() =>
            setUserInfo((prevUserInfo) => ({
              ...prevUserInfo,
              plan: prevUserInfo.plan === "Pro" ? "" : "Pro",
            }))
          }
          active={userInfo.plan === "Pro"}
        />
      </div>
      <div className="w-full bg-Magnolia  flex p-4  sm:mt-10 mt-24">
        <div className="min:w-1/2 w-64 h-max text-CoolGray m-auto flex justify-between items-center">
          <h1
            className={`${
              !userInfo.yearly && "text-MarineBlue"
            } transition-all font-medium`}
          >
            Monthly
          </h1>
          <div
            className={`w-14 h-7 rounded-full bg-MarineBlue cursor-pointer p-1 flex justify-start ${
              userInfo.yearly && "justify-end"
            }`}
            onClick={() =>
              setUserInfo({ ...userInfo, yearly: !userInfo.yearly })
            }
          >
            <motion.div
              layout
              className={`aspect-square h-full rounded-full bg-white ${
                userInfo.yearly && ""
              }`}
            ></motion.div>
          </div>
          <h1
            className={`${
              userInfo.yearly && "text-MarineBlue"
            } transition-all font-medium`}
          >
            Yearly
          </h1>
        </div>
      </div>
      <Button onClick={onSubmit}></Button>
    </motion.div>
  );
}

export default Step2;

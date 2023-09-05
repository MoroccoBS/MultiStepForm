import { motion } from "framer-motion";
import Input from "../components/Input";
import { useRef, useState } from "react";
import Button from "../components/Button";

interface Step1Props {
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
  onNext: () => void;
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
}

function Step1({ setUserInfo, onNext, userInfo }: Step1Props) {
  const [formErrors, setFormErrors] = useState<{
    name: string;
    email: string;
    phone: string;
  }>({
    name: "",
    email: "",
    phone: "",
  });
  const Name = useRef<HTMLInputElement>(null);
  const Email = useRef<HTMLInputElement>(null);
  const Phone = useRef<HTMLInputElement>(null);

  const formValidation = (): boolean => {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex: RegExp =
      /^(\+\d{1,3}\s?)?(\(\d{1,3}\)\s?)?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/;
    const nameValue = Name.current?.value || "";
    const emailValue = Email.current?.value || "";
    const phoneValue = Phone.current?.value || "";

    let isValid = true;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    if (nameValue === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "This field is required",
      }));
      isValid = false;
    } else if (nameValue.length < 3) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "Must be at least 3 characters",
      }));
      isValid = false;
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
    }

    if (emailValue === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "This field is required",
      }));
      isValid = false;
    } else if (!emailRegex.test(emailValue)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Must be a valid email",
      }));
      isValid = false;
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }

    if (phoneValue === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: "This field is required",
      }));
      isValid = false;
    } else if (!phoneRegex.test(phoneValue)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Must be a valid phone number",
      }));
      isValid = false;
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: "",
      }));
    }
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      if (!isValid) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          name: "",
          email: "",
          phone: "",
        }));
      }
    }, 3000);

    return isValid;
  };

  const onSubmit = () => {
    if (formValidation()) {
      onNext();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-max flex flex-col"
    >
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-3xl text-MarineBlue font-bold ">Personal Info</h1>
        <p className="text-base text-CoolGray">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form action="" className="w-full mt-10 flex flex-col gap-6">
        <Input
          name="Name"
          type="text"
          placeholder="e.g. Stephen King"
          error={formErrors.name !== ""}
          errorText={formErrors.name}
          Ref={Name}
          onFocus={() => {
            setFormErrors((prevErrors) => ({
              ...prevErrors,
              name: "",
            }));
          }}
          value={userInfo.name}
          setValue={() =>
            setUserInfo({ ...userInfo, name: Name.current?.value || "" })
          }
        />
        <Input
          name="Email Address"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          error={formErrors.email !== ""}
          errorText={formErrors.email}
          Ref={Email}
          onFocus={() => {
            setFormErrors((prevErrors) => ({
              ...prevErrors,
              email: "",
            }));
          }}
          value={userInfo.email}
          setValue={() =>
            setUserInfo({ ...userInfo, email: Email.current?.value || "" })
          }
        />
        <Input
          name="Phone Number"
          type="tel"
          placeholder="e.g. +1 234 567 890"
          error={formErrors.phone !== ""}
          errorText={formErrors.phone}
          Ref={Phone}
          onFocus={() => {
            setFormErrors((prevErrors) => ({
              ...prevErrors,
              phone: "",
            }));
          }}
          value={userInfo.phone}
          setValue={() =>
            setUserInfo({ ...userInfo, phone: Phone.current?.value || "" })
          }
        />
      </form>
      <Button onClick={onSubmit}></Button>
    </motion.div>
  );
}

export default Step1;

import { AnimatePresence, motion } from "framer-motion";
import Json from "../assets/images/ThankYou2.json";
import Lottie from "lottie-react";
import Loading from "../assets/images/planet.json";
import { useEffect, useState } from "react";

function FinalStep() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <motion.div
      className="w-full h-full flex flex-col justify-center items-center gap-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {loading ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Lottie animationData={Loading} loop={true} />
          </motion.div>
        </AnimatePresence>
      ) : (
        <>
          <motion.div
            className=" w-40 h-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Lottie
              animationData={Json}
              loop={false}
              className="animationCss"
            />
          </motion.div>
          <h1 className="text-3xl text-MarineBlue font-bold ">Thank you!</h1>
          <p className="text-base text-CoolGray mb-10">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </>
      )}
    </motion.div>
  );
}

export default FinalStep;

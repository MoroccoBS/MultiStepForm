import { motion } from "framer-motion";

interface PlanProps {
  image: string;
  Heading: string;
  Price: string;
  Yearly?: boolean;
  onClick: () => void;
  active: boolean;
}

function Plan({ image, Heading, Price, Yearly, onClick, active }: PlanProps) {
  return (
    <div
      className={`text-black w-full h-max outline outline-1 flex sm:gap-10 gap-4 sm:flex-col flex-row ${
        active ? "outline-indigo-400 outline-2 bg-Magnolia" : "outline-CoolGray"
      } rounded-2xl px-4 sm:py-6 py-2`}
      onClick={onClick}
    >
      <img src={image} alt="" className="w-10 h-auto" />
      <div className="flex flex-col justify-between">
        <h1 className="text-xl text-MarineBlue font-medium">{Heading}</h1>
        <h2 className="text-CoolGray">{Price}</h2>
        <motion.h2
          layout
          animate={Yearly ? { display: "block" } : { display: "none" }}
          transition={{ duration: 0.5 }}
          className={`text-sm text-MarineBlue/80 font-medium transition-all `}
        >
          2 Months free
        </motion.h2>
      </div>
    </div>
  );
}

export default Plan;

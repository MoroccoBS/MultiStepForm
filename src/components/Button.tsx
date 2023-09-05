interface ButtonProps {
  onClick: () => void;
}

function Button({ onClick }: ButtonProps) {
  return (
    <button
      className={
        "bg-MarineBlue text-white rounded-xl py-3 px-6 absolute sm:bottom-12 bottom-5 sm:right-16 right-12 cursor-pointer hover:bg-MarineBlue/75 transition-all"
      }
      onClick={onClick}
    >
      Next Step
    </button>
  );
}

export default Button;

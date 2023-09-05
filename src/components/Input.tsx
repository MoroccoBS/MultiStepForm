interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  error?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Ref: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFocus: () => void;
  value?: string;
  setValue: (value: string) => void;
  errorText: string;
}

function Input({
  name,
  type,
  placeholder,
  Ref,
  error,
  onFocus,
  value,
  setValue,
  errorText,
}: InputProps) {
  return (
    <div className="w-full h-max flex-col flex gap-2">
      <div className="w-full flex justify-between items-center flex-row-reverse">
        <h2
          className={`text-sm text-red-500 font-bold transition-all ${
            error
              ? "opacity-100 pointer-events-auto"
              : " opacity-0 pointer-events-none"
          }`}
        >
          {errorText}
        </h2>
        <h2 className="text-base text-MarineBlue">{name}</h2>
      </div>
      <input
        className={`${
          error ? "outline-red-500" : "outline-CoolGray/75"
        } text-xl text-MarineBlue font-bold focus:outline-MarineBlue rounded-xl py-3 px-4 placeholder:text-CoolGray placeholder:text-base placeholder:font-normal focus:outline-none outline outline-1`}
        type={type}
        placeholder={placeholder}
        ref={Ref}
        onFocus={onFocus}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;

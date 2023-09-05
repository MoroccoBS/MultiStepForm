interface AddOnProps {
  active: boolean;
  Heading: string;
  Price: string;
  Description: string;
  onClick: () => void;
}

function AddOn({ active, Heading, Price, Description, onClick }: AddOnProps) {
  return (
    <div
      className={`text-black w-full h-max outline outline-1 flex lg:gap-10 gap-4 items-center ${
        active ? "outline-indigo-400 outline-2 bg-Magnolia" : "outline-CoolGray"
      } rounded-2xl lg:p-4 p-3 text-black transition-all`}
      onClick={onClick}
    >
      <label className="container">
        <input
          type="checkbox"
          onClick={onClick}
          checked={active}
          onChange={onClick}
        />
        <svg viewBox="0 0 64 64" height="2em" width="2em">
          <path
            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
            pathLength="575.0541381835938"
            className="path"
          ></path>
        </svg>
      </label>
      <div>
        <h1 className="lg:text-xl text-lg text-MarineBlue font-bold">
          {Heading}
        </h1>
        <h2 className="lg:text-base text-sm text-CoolGray">{Description}</h2>
      </div>
      <h1 className="ml-auto lg:text-base text-sm font-medium text-PurplishBlue">
        {Price}
      </h1>
    </div>
  );
}

export default AddOn;

import { RxCross2 } from "react-icons/rx";

const CloseButton = ({ action }) => {
  return (
    <button
      className="absolute z-50 px-2 py-1 border-2 md:px-4 md:py-3 opacity-70 md:opacity-70 top-5 group right-5 rounded-xl bg-error text-lg sm:text-xl lg:text-2xl neutral-content border-error btn-outline hover:text-base-200 hover:opacity-100 hover:scale-98"
      onClick={() => action(null)}
    >
      <RxCross2 />
    </button>
  );
};

export default CloseButton;

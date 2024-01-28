const CloseButton = ({ action }) => {
  return (
    <button
      className="absolute z-50 px-2 py-1 border-2 md:px-4 md:py-3 opacity-70 md:opacity-20 top-5 group right-5 rounded-xl bg-error text- neutral-content border-error btn-outline hover:text-base-200 hover:border-error hover:opacity-100 hover:scale-98"
      onClick={() => action(null)}
    >
      <i className="text-lg leading-none align-text-bottom transition duration-500 h-fit fa-solid fa-xmark"></i>
    </button>
  );
};

export default CloseButton;

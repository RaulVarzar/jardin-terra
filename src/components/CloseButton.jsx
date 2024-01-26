const CloseButton = ({ action }) => {
  return (
    <button
      className="absolute z-50 px-3 py-2 md:px-4 md:py-3 opacity-20 top-4 group right-4 rounded-xl hover:bg-error text-neutral-content border-1 border-neutral-content btn-outline hover:text-base-200 hover:border-error hover:opacity-100 hover:scale-98"
      onClick={() => action(null)}
    >
      <i className="text-lg leading-none align-text-bottom transition duration-500 h-fit fa-solid fa-xmark"></i>
    </button>
  );
};

export default CloseButton;

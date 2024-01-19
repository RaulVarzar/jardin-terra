const Socials = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full gap-1 py-2 text-2xl text-center xl:justify-end text-neutral-content lg:gap-2 lg:text-3xl">
      {/* <i className=" fa-brands fa-facebook"></i>
      <i className=" fa-brands fa-instagram"></i>
      <i className=" fa-brands fa-youtube"></i>
      <i className=" fa-brands fa-linkedin"></i> */}
      <span className="flex flex-row items-center py-1.5 px-2 lg:px-4  shadow-md cursor-pointer justify-evenly opacity-70 hover:opacity-100  transition duration-300">
        <i className=" fa-brands fa-facebook"></i>
      </span>
      <span className="flex flex-row items-center py-1.5 px-2 lg:px-4  shadow-md cursor-pointer justify-evenly opacity-70 hover:opacity-100  transition duration-300">
        <i className=" fa-brands fa-instagram"></i>
      </span>
      <span className="flex flex-row items-center py-1.5 px-2 lg:px-4  shadow-md cursor-pointer justify-evenly opacity-70 hover:opacity-100  transition duration-300">
        <i className=" fa-brands fa-youtube"></i>
      </span>
      <span className="flex flex-row items-center py-1.5 px-2 lg:px-4 shadow-md cursor-pointer justify-evenly opacity-70 hover:opacity-100 transition duration-300">
        <i className=" fa-brands fa-linkedin"></i>
      </span>
    </div>
  );
};

export default Socials;

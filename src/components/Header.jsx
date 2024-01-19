const Header = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-col px-4 xl:px-10 xl:py-8 gap-y-2 w-fit rounded-2xl">
        <div className="flex flex-col gap-2 text-neutral-content">
          <h3 className="text-4xl font-bold leading-none xl:text-5xl">
            NOI SUNTEM ARTIȘTII
          </h3>
          <h3 className="text-5xl font-bold leading-none xl:text-7xl">
            GRĂDINII TALE
          </h3>
        </div>

        <h3 className="max-w-2xl text-xl font-light leading-none text-gray-100 lg:text-2xl opacity-60">
          Proiectăm spații verzi în armonie cu natura
        </h3>
        <div className="flex flex-row gap-10 mt-6">
          <button className="flex flex-row items-center gap-6 px-3 py-2 text-xl font-normal transition duration-150 ease-in rounded-xl group text-neutral-content w-fit bg-base-content hover:bg-base-300 hover:scale-95">
            <span className="flex items-center h-full px-6 text-base">
              CONTACT
            </span>
            <i className="p-2.5 text-base text-gray-200 rounded-full fa-solid fa-arrow-right-long bg-base-100 group-hover:bg-transparent"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

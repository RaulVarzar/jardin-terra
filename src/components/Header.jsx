import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-row w-full px-2 xl:flex-col xl:px-8 xl:py-8 gap-y-8 rounded-2xl">
        <div className="flex flex-col w-full gap-1 ">
          <div className="flex flex-col gap-2 text-neutral-content">
            <h3 className="text-2xl font-bold leading-none md:text-3xl xl:text-4xl">
              NOI SUNTEM ARTIȘTII
            </h3>
            <h3 className="text-4xl font-bold leading-none md:text-5xl xl:text-6xl">
              GRĂDINII TALE
            </h3>
          </div>
          <h3 className="max-w-2xl text-lg font-light leading-none text-gray-100 md:text-xl lg:text-2xl opacity-60">
            Proiectăm spații verzi în armonie cu natura
          </h3>
        </div>
        <div className="grid max-xl:w-1/2 xl:w-fit place-content-center">
          <Link
            to="/start"
            className="py-3 pl-8 pr-4 text-base xl:text-md mybutton bg-neutral rounded-xl hover:pl-8 text-neutral-content hover:text-gray-100"
          >
            Începe acum
            <span>
              <i className="p-2 text-sm text-gray-200 fa-solid fa-arrow-right-long"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

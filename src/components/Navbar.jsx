import { Link } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="z-50 mx-auto  relative  navbar  max-w-[2000px] text-neutral-content">
        <div className="fixed top-0 left-0 flex flex-row justify-between w-full px-6 py-3 md:hidden bg-base-200">
          <Link to="/">
            <img src={logo} className="object-cover w-20 h-auto" alt="" />
          </Link>
          <div className="flex flex-col items-end w-8 gap-1.5 opacity-70">
            <div className="w-full h-[3px] bg-neutral-content rounded-full"></div>
            <div className="w-9/12 h-[3px] bg-neutral-content rounded-full"></div>
          </div>
        </div>

        <div className="flex-row justify-between hidden w-full gap-3 px-8 text-base font-normal md:flex">
          <Link to="/">
            <img src={logo} className="object-cover w-32 h-auto" alt="" />
          </Link>

          <div className="flex flex-row gap-8 px-6 text-lg font-bold uppercase lg:gap-16">
            <Link
              to="/services"
              className="flex items-center px-3 pt-2 pb-1 nav-button"
            >
              Servicii
            </Link>
            <Link
              to="/projects"
              className="flex items-center px-4 pt-2 pb-1 transition duration-300 opacity-75 hover:opacity-100 nav-button"
            >
              Proiecte
            </Link>
            <Link
              to="/careers"
              className="flex items-center px-4 pt-2 pb-1 transition duration-300 opacity-75 hover:opacity-100 nav-button"
            >
              Cariere
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.png';

const Navbar = () => {
  return (
    <>
      <nav className="z-50 mx-auto  relative  navbar  max-w-[1700px] text-neutral-content">
        <div className="fixed top-0 left-0 flex flex-row justify-between w-full px-6 py-3 md:hidden bg-base-200">
          <Link to="/">
            <img src={logo} className="object-cover w-20 h-auto" alt="" />
          </Link>
          <div className="flex flex-col items-end w-8 gap-1.5 opacity-70">
            <div className="w-full h-[3px] bg-neutral-content rounded-full"></div>
            <div className="w-9/12 h-[3px] bg-neutral-content rounded-full"></div>
          </div>
        </div>

        <div className="flex-row justify-between hidden w-full gap-3 px-4 text-base font-normal lg:px-8 md:flex">
          <Link to="/">
            <img src={logo} className="object-cover w-32 h-auto" alt="" />
          </Link>

          <div className="flex flex-row justify-end gap-4 text-base font-bold uppercase lg:text-md lg:gap-8 xl:text-lg xl:gap-16">
            <NavLink
              to="/servicii"
              className={({ isActive }) =>
                isActive
                  ? 'bg-neutral flex items-center px-4 pt-2 pb-1 nav-button'
                  : 'flex items-center px-4 pt-2 pb-1 nav-button'
              }
            >
              Servicii
            </NavLink>
            <Link
              to="/mod-de-lucru"
              className="flex items-center px-4 pt-2 pb-1 transition duration-300 opacity-75 hover:opacity-100 nav-button"
            >
              Mod de lucru
            </Link>
            <Link
              to="/sustenabilitate"
              className="flex items-center px-4 pt-2 pb-1 transition duration-300 opacity-75 hover:opacity-100 nav-button"
            >
              Sustenabilitate
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

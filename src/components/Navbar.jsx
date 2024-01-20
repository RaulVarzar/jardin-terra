import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '/logo.png';
import { FadeIn, FromBottom } from './utils/animations';

const Navbar = () => {
  return (
    <>
      <motion.nav
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.25, duration: 0.95, ease: 'easeInOut' }}
        className="fixed left-0 right-0 z-50 flex max-w-2xl mx-auto overflow-hidden border-2 shadow-xl border-opacity-15 rounded-xl border-neutral-content lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl backdrop-brightness-75 backdrop-blur-md top-4 text-neutral-content"
      >
        <div className="fixed top-0 left-0 flex flex-row justify-between w-full px-6 py-3 md:hidden bg-base-200">
          <Link to="/">
            <img src={logo} className="object-cover w-20 h-auto" alt="" />
          </Link>
          <div className="flex flex-col items-end w-8 gap-1.5 opacity-70 py-4">
            <div className="w-full h-[3px] bg-neutral-content rounded-full"></div>
            <div className="w-9/12 h-[3px] bg-neutral-content rounded-full"></div>
          </div>
        </div>

        <div className="flex-row justify-between hidden w-full h-full gap-3 px-4 text-base font-thin grow lg:px-6 md:flex">
          <FadeIn delay={1} duration={0.5}>
            <Link to="/">
              <img
                src={logo}
                className="object-cover w-24 h-auto py-2"
                alt=""
              />
            </Link>
          </FadeIn>

          <div className="flex flex-row justify-end overflow-hidden text-base font-light tracking-wide text-white lg:text-base">
            <FromBottom delay={1}>
              <NavLink
                to="/servicii"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-4 border-neutral flex items-center px-4 pt-2 pb-1'
                    : 'flex items-center px-4 pt-2 pb-1 hover:bg-opacity-25 nav-button hover:bg-base-300'
                }
              >
                Servicii
              </NavLink>
            </FromBottom>
            <FromBottom delay={1.15}>
              <Link
                to="/mod-de-lucru"
                className="flex items-center px-4 pt-2 pb-1 transition duration-300 hover:bg-opacity-25 nav-button hover:bg-base-300"
              >
                Mod de lucru
              </Link>
            </FromBottom>
            <FromBottom delay={1.3}>
              <Link
                to="/sustenabilitate"
                className="flex items-center px-4 pt-2 pb-1 transition duration-300 hover:bg-opacity-25 nav-button hover:bg-base-300"
              >
                Sustenabilitate
              </Link>
            </FromBottom>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="rounded-full navbar ">
        <div className="flex flex-row justify-between w-full gap-3 px-1 font-normal text-accent-content">
          <div className="flex flex-row flex-grow gap-8 pl-4 text-xl">
            <Link to="/services">Servicii</Link>
            <Link to="/projects">Proiecte</Link>
            <Link to="/careers">Cariere</Link>
          </div>

          <Link
            to="/contact"
            className="flex flex-row items-center gap-8 py-2 pl-4 pr-3 text-base font-light text-white rounded-full bg-accent-content"
          >
            Contact
            <i className="fa-solid fa-phone text-xs bg-base-100 py-1.5 px-2 rounded-full text-accent-content"></i>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;

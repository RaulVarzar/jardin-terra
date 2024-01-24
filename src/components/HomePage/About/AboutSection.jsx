import logo from '/logo-fancy.png';
import despre from '/images/about/despre.jpg';
import ContactCard from './ContactCard';

const About = () => {
  return (
    <div className="flex flex-col min-h-[25vh] gap-6 px-12 py-10 text-neutral-content place-content-center">
      <div className="flex flex-col items-center justify-center gap-6 grow">
        {/* <div className="flex flex-col col-span-4 p-8 transition duration-300 bg-opacity-25 border-2 justify-evenly bg-base-content hover:bg-opacity-35 rounded-xl border-neutral-content border-opacity-5 hover:border-opacity-15">
          <div className="flex flex-col gap-1">
            <h3 className="text-5xl font-bold 2xl:text-6xl text-neutral-content">
              Sustenabilitate
            </h3>
            <p className="text-xl font-light tracking-wide text-accent-content opacity-60">
              Serviciile noastre de proiectare și amenajare a spațiilor verzi
              implică și evaluarea impactului activității noastre asupra
              mediului. În procesul de evaluare, ținem cont de responsabilitatea
              ecologică a spațiului, de biodiversitatea acestuia și compoziția
              materialelor utilizate.
            </p>
          </div>

          <img src={logo} alt="" className="w-64" />
        </div> */}
        <div className="w-full max-w-7xl">
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default About;

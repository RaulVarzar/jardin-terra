import logo from '/logo-fancy.png';
import despre from '/images/about/despre.jpg';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen gap-6 px-12 py-10 text-neutral-content place-content-center">
      <h3 className="text-4xl font-bold ">Despre noi</h3>
      <div className="grid grid-cols-7 gap-6 grow">
        <div className="flex flex-col col-span-4 p-8 transition duration-300 bg-opacity-25 border-2 justify-evenly bg-base-content hover:bg-opacity-35 rounded-xl border-neutral-content border-opacity-5 hover:border-opacity-15">
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
        </div>
        <div className="grid col-span-3 grid-rows-4 gap-6">
          <div className="flex flex-col justify-center row-span-3 border-2 bg-primary rounded-xl border-neutral-content border-opacity-10">
            <img src={despre} alt="" className="w-64" />
          </div>
          <div className="flex flex-row items-center row-span-1 gap-2 px-8 transition duration-300 border-2 group xl:gap-4 justify-stretch bg-secondary bg-opacity-15 hover:bg-opacity-25 hover:border-opacity-20 rounded-xl border-neutral-content border-opacity-10">
            <h3 className="w-1/3 text-2xl text-right text-neutral-content">
              Ai mai multe intrebari?
            </h3>
            <div className="flex flex-col items-center gap-1 mx-auto">
              <button className="flex gap-3 px-8 uppercase btn btn-accent rounded-xl">
                <i className="fa-regular fa-message"></i>
                Trimite-ne un mesaj
              </button>
              <div className=" divider divider-accent">sau</div>
              <span className="flex items-center gap-2 transition duration-200 text-md xl:text-lg opacity-40 group-hover:opacity-50">
                <i className="fa-regular fa-envelope" />
                office@jardinterra.ro
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

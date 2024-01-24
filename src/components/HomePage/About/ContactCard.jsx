import { Link } from 'react-router-dom';

const ContactCard = () => {
  return (
    <div className="grid items-center justify-center px-8 py-20 gap-y-4 gap-x-8 max-lg:flex max-lg:flex-col lg:grid-cols-2 negative-shadow md:gap-x-12 xl:gap-16 backdrop-brightness-135 rounded-xl border-neutral-content border-opacity-10">
      <h3 className="text-2xl font-semibold tracking-wide md:text-3xl lg:text-right xl:text-4xl text-neutral-content">
        Ai mai multe intrebări?
      </h3>
      <div className="flex flex-col items-center w-full gap-y-1 max-w-96">
        <Link
          to="/contact"
          className="flex gap-3 uppercase rounded-lg bg-opacity-40 border-opacity-40 btn-block btn btn-accent group"
        >
          <i className="fa-regular fa-message group-hover:hidden"></i>
          Trimite-ne un mesaj
        </Link>
        <div className=" divider divider-accent">sau</div>
        <a
          href="mailto:office@jardinterra.ro"
          className="flex items-center gap-2 transition duration-200 cursor-pointer text-md xl:text-lg opacity-40 hover:opacity-65"
        >
          <i className="fa-regular fa-envelope" />
          office@jardinterra.ro
        </a>
      </div>
    </div>
  );
};

export default ContactCard;

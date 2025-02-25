import { FromLeft, Reveal } from "../../components/utils/animations";

const ContactDetails = () => {
  return (
    <div className="flex flex-col w-full gap-4 sm:gap-8 items-center text-center justify-center">
      <FromLeft delay={1} duration={1}>
        {/* <img src={logo} className="max-w-32 brightness-75" alt="" /> */}
      </FromLeft>
      <Reveal delay={0.25} duration={1}>
        <h3 className="text-3xl font-semibold tracking-wider sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl opacity-80">
          CONTACT
        </h3>
      </Reveal>
      <span className="flex flex-col items-center justify-center gap-2 text-base font-light tracking-wider w-fit md:gap-6 sm:text-md lg:text-xl opacity-60 h-fit">
        <Reveal delay={0.4} duration={1.5}>
          <p> office@jardinterra.ro</p>
          <div className="w-16 h-0.5 bg-neutral-content opacity-30 mt-4 mx-auto"></div>
        </Reveal>
        <Reveal delay={0.5} duration={1.5}>
          <p>Cluj-Napoca, RO</p>
          <div className="w-16 h-0.5 bg-neutral-content opacity-30 mt-4 mx-auto"></div>
        </Reveal>
        <Reveal delay={0.6} duration={1.5}>
          <p>0737 837 383</p>
        </Reveal>
      </span>
    </div>
  );
};

export default ContactDetails;

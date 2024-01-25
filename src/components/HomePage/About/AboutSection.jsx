import despre from '/images/about/despre.jpg';
import ContactCard from './ContactCard';

const About = () => {
  return (
    <div className="flex flex-col min-h-[25vh] gap-6 px-12 py-[15vh] text-neutral-content place-content-center">
      <div className="flex flex-col items-center justify-center gap-6 grow">
        <div className="w-full max-w-7xl">
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default About;

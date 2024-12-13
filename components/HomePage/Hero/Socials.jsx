import { motion } from "framer-motion";
import { FromBottom } from "../../utils/animations";

const SOCIALS = [
  { name: "facebook", link: "https://www.facebook.com/JardinTerraRomania" },
  { name: "instagram", link: "https://www.instagram.com/jardin.terra/" },
  {
    name: "youtube",
    link: "https://www.youtube.com/channel/UC2Iv2L2dl8GnO7Cd3vXsTZg",
  },
  { name: "linkedin", link: "https://www.linkedin.com/company/jardin-terra/" },
];

const Socials = () => {
  return (
    <div className="flex flex-row items-start justify-center gap-1 border-4 border-red-700 text-3xl text-center w-fit xl:justify-start text-neutral-content lg:gap-2 lg:text-3xl">
      {SOCIALS.map((button, i) => (
        <FromBottom delay={1 + i * 0.25} duration={0.8} key={button.name}>
          <motion.a
            href={button.link}
            target="_blank"
            initial={{ opacity: 0.65 }}
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: { duration: 0.3, delay: 0, ease: "easeInOut" },
            }}
            className="flex flex-row text-neutral-content group px-2 items-center py-1.5 lg:px-3 cursor-pointer justify-evenly hover:text-accent-content transition-colors duration-300"
          >
            <i
              className={`fa-brands group-hover:-translate-y-0.5 transition ease-in-out duration-200 fa-${button.name}`}
            ></i>
          </motion.a>
        </FromBottom>
      ))}
    </div>
  );
};

export default Socials;

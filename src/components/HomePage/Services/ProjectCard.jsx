import { Blur, FromLeft, Reveal } from "../../utils/animations";
import { motion } from "framer-motion";

const ProjectCard = ({ project, isVisible, colored, setSelectedId }) => {
  const { title, photo, descriptions } = project;

  return (
    <>
      <motion.div
        layoutId={project}
        className={
          "grid max-xl:grid-rows-7 xl:grid-cols-7 w-[95vw] transition duration-700  h-full xl:w-[85vw] 3xl:w-[80vw] max-w-7xl p-2 md:p-4 xl:p-6 negative-shadow cursor-pointer rounded-2xl border-opacity-10 hover:border-opacity-20 " +
          (colored ? " bg-primary" : " bg-base-300 ")
        }
      >
        <div className="z-10 h-full overflow-hidden max-sm:row-span-2 sm:max-xl:row-span-3 xl:col-span-3 rounded-xl ">
          <Blur delay={0.1} duration={0.4} className="w-full h-full">
            <img
              src={`/images/${photo}.jpg`}
              className="object-cover object-center w-full h-full brightness-85 group-hover:brightness-100 "
              alt="project-img"
            />
          </Blur>
        </div>

        <div className="z-20 flex flex-col justify-center gap-6 px-3 py-8 mx-auto overflow-auto xl:gap-8 md:px-5 xl:px-12 max-sm:row-span-5 sm:max-xl:row-span-4 xl:col-span-4 ">
          <div className="flex flex-col gap-1 xl:gap-2">
            <Reveal delay={0.3} repeat parentVisible={isVisible} duration={1.2}>
              <h1 className="p-0 pb-4 my-0 text-2xl font-semibold leading-none l h-fit md:text-4xl xl:text-6xl text-neutral-content">
                {title}
              </h1>
            </Reveal>
            <FromLeft repeat parentVisible={isVisible} delay={0.9} duration={1}>
              <h3 className="text-sm font-light leading-tight tracking-wide sm:text-base text-balance xl:text-md opacity-70 text-neutral-content">
                {descriptions[0].content}
              </h3>
            </FromLeft>
          </div>
          <FromLeft delay={1.2} duration={0.8} repeat parentVisible={isVisible}>
            <button
              onClick={() => setSelectedId(project)}
              className="z-50 px-4 py-2 text-base font-light tracking-wider transition duration-300 rounded-md opacity-50 mybutton md:px-6 md:py-3 border-1 border-neutral-content text-neutral-content hover:opacity-100 "
            >
              Citește mai mult
              <span>
                <i className="p-2 text-sm text-stone-100 fa-solid fa-angle-right"></i>
              </span>
            </button>
          </FromLeft>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;

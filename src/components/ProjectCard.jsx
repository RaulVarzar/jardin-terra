import { Blur, FromLeft, Reveal } from './utils/animations';

const ProjectCard = ({ project, isVisible }) => {
  const { title, photo, description } = project;

  return (
    <div className="grid max-xl:grid-rows-7 xl:grid-cols-7 w-[95vw] xl:w-[80vw] p-4 transition duration-300  border-2 cursor-pointer backdrop-brightness-110 hover:bg-base-conten border-neutral-content rounded-2xl border-opacity-10 hover:border-opacity-20">
      <div className="z-10 h-full overflow-hidden max-sm:row-span-2 sm:max-xl:row-span-3 xl:col-span-3 rounded-xl ">
        <Blur delay={0.2} duration={0.6} className="w-full h-full">
          <img
            src={`/images/${photo}.jpg`}
            className="object-cover object-center w-full h-full brightness-85 group-hover:brightness-100 "
            alt="project-img"
          />
        </Blur>
      </div>

      <div className="z-20 flex flex-col justify-center gap-6 px-3 py-8 mx-auto overflow-auto md:px-5 xl:px-12 max-sm:row-span-5 sm:max-xl:row-span-4 xl:col-span-4 ">
        <Reveal delay={0.3} repeat parentVisible={isVisible} duration={0.7}>
          <h1 className="text-2xl font-semibold leading-tight tracking-tight md:text-4xl xl:text-6xl text-neutral-content">
            {title}
          </h1>
        </Reveal>
        <FromLeft repeat parentVisible={isVisible} delay={0.9} duration={0.6}>
          <h3 className="text-base font-normal leading-tight xl:text-md opacity-70 text-neutral-content">
            {description}
          </h3>
        </FromLeft>
        <FromLeft
          delay={1.2}
          duration={0.65}
          repeat
          parentVisible={isVisible}
          className="relative flex flex-row items-start gap-2 w-fit group "
        >
          <div className="w-0.5 h-full transition-all duration-300 rounded-sm group-hover:w-1 bg-neutral-content opacity-40 group-hover:opacity-80"></div>
          <button className="z-50 py-0.5 transition duration-300  text-neutral-content w-fit group-hover:opacity-80 opacity-40">
            Citește mai mult
          </button>
        </FromLeft>
      </div>
    </div>
  );
};

export default ProjectCard;

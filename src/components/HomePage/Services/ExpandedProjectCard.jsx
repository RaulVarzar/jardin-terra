import { Blur, FadeIn, FromLeft, Reveal } from '../../utils/animations';
import { motion } from 'framer-motion';
import { useLockBodyScroll } from '@uidotdev/usehooks';

const ExpandedProjectCard = ({ project, setSelectedId, selectedId }) => {
  useLockBodyScroll();
  const { title, photo, description, secondaryDescription } = project;

  return (
    <motion.div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex p-4 sm:p-12 backdrop-blur-xl backdrop-brightness-75 ">
      <motion.div
        layoutId={selectedId}
        className="relative z-50 grid w-full h-full p-4 cursor-pointer border-1 rounded-2xl xl:grid-cols-7 border-neutral-content bg-base-200 border-opacity-15"
      >
        <div className="z-10 h-full col-span-3 overflow-hidden">
          <Blur delay={0.2} duration={0.6} className="w-full h-full">
            <img
              src={`/images/${photo}.jpg`}
              className="object-cover object-center w-full h-full rounded-lg brightness-85 group-hover:brightness-100"
              alt="project-img"
            />
          </Blur>
        </div>
        <motion.button
          className="absolute z-50 opacity-25 top-4 right-4 btn rounded-xl hover:bg-accent text-neutral-content border-1 border-neutral-content btn-outline hover:text-base-200 hover:opacity-100 hover:scale-95"
          onClick={() => setSelectedId(null)}
        >
          <i className="text-lg fa-solid fa-xmark"></i>
        </motion.button>

        <div className="z-20 flex flex-col justify-center col-span-4 gap-6 px-3 py-8 mx-auto overflow-auto overflow-y-auto xl:gap-8 md:px-5 xl:px-12 ">
          <div className="flex flex-col w-full max-w-6xl gap-6 xl:gap-8">
            <FromLeft delay={0.4} duration={0.9}>
              <h1 className="p-0 pb-4 my-0 text-2xl font-semibold leading-none h-fit md:text-4xl xl:text-6xl text-neutral-content">
                {title}
              </h1>
            </FromLeft>
            <FromLeft delay={0.6} duration={0.7}>
              <h3 className="font-normal leading-tight tracking-wider text-md xl:text-lg opacity-80 text-neutral-content">
                {description}
              </h3>
            </FromLeft>
            <FromLeft delay={0.8} duration={0.5}>
              <h5 className="text-base font-light tracking-wider text-neutral-content opacity-70">
                {secondaryDescription}
              </h5>
            </FromLeft>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExpandedProjectCard;

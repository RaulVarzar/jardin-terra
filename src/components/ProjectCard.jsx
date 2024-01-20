const ProjectCard = ({ photo, title }) => {
  return (
    <div className="relative flex flex-col w-72 sm:w-[400px] xl:w-[500px] aspect-square p-4 text-center backdrop-brightness-75 border-neutral-content border-2 border-opacity-10 hover:border-opacity-20 transition duration-300 shadow-xl cursor-pointer rounded-xl hover:scale-102 hover:shadow-none group ">
      <div className="z-10 w-full h-full overflow-hidden transition duration-300 ease-in-out rounded-lg group-hover:opacity-100 ">
        <img
          src={`/images/${photo}.jpg`}
          className="object-cover object-center w-full h-full transition-all duration-300 brightness-85 group-hover:brightness-100 "
          alt="project-img"
        />
      </div>
      <div className="z-20 grid w-full px-2 mx-auto overflow-auto text-center min-h-24 place-content-center">
        <h1 className="text-lg font-normal leading-tight text-neutral-content">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ProjectCard;

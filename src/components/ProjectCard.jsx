const ProjectCard = ({ photo, title }) => {
  return (
    <div className="relative flex w-full h-40 m-0 text-center transition duration-300 shadow-xl cursor-pointer card outline-4 outline outline-base-content hover:scale-102 hover:shadow-none group rounded-xl ">
      <div className="z-10 w-full h-full overflow-hidden transition duration-300 ease-in-out rounded-xl group-hover:opacity-100 ">
        <img
          src={`/images/${photo}.jpg`}
          className="object-cover object-center w-full h-full"
          alt="project-img"
        />
      </div>
      <div className="absolute bottom-0 z-20 grid w-full px-2 py-1 mx-auto overflow-auto text-center bg-base-content min-h-12 place-content-center">
        <h1 className="text-sm font-normal leading-tight text-neutral-content">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ProjectCard;

// import projectphoto from "/images/spatii-verzi-cartiere.jpg";

export const ProjectCard = ({ photo }) => {
  return (
    <div className="relative flex w-full m-0 transition duration-300 shadow-sm cursor-pointer hover:scale-105 hover:shadow-xl group h-80 rounded-xl">
      <div className="z-10 w-full h-full overflow-hidden transition duration-300 ease-in-out rounded-xl group-hover:opacity-100 ">
        <img
          src={`/images/${photo}.jpg`}
          className="block object-cover object-center w-full h-full transition duration-300 transform scale-100 opacity-100 animate-fade-in group-hover:scale-110"
          alt=""
        />
      </div>
      <div className="absolute bottom-0 z-20 pb-4 m-0 transition duration-300 ease-in-out ps-4 group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
        <h1 className="text-2xl font-bold text-white shadow-xl ">
          Lorem ipsum
        </h1>
        <h1 className="text-sm font-light text-gray-200 shadow-xl">
          Dolor sit amet consectetur adipisicing elit
        </h1>
      </div>
    </div>
  );
};

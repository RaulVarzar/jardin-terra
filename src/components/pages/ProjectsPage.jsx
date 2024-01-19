import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col gap-4 px-8 py-4">
      <h3 className="text-2xl font-semibold uppercase text-neutral-content opacity-80">
        Serviciile noastre
      </h3>
      <div className="grid w-full grid-cols-3 gap-4 text-2xl font-bold h-fit place-content-center cards">
        <ProjectCard photo={"gradini-private"} title={"Grădini private"} />

        <ProjectCard
          photo={"spatii-verzi-cartiere"}
          title={"Spații verzi pentru cartiere rezidențiale"}
        />

        <ProjectCard
          photo={"spatii-verzi-birouri"}
          title={"Spații verzi pentru clădiri de birouri"}
        />

        <ProjectCard
          photo={"gradini-comerciale"}
          title={"Grădini pentru spații comerciale și parcuri industriale"}
        />
        <ProjectCard
          photo={"gradini-verticale"}
          title={"Grădini verticale exterioare și interioare"}
        />

        <ProjectCard photo={"acoperisuri-verzi"} title={"Acoperișuri verzi"} />
      </div>
    </div>
  );
};

export default Projects;

import { useState } from "react";
import ProjectCard from "./ProjectCard";

const SERVICES = [
  { photo: "gradini-private", title: "Grădini private" },
  {
    photo: "spatii-verzi-cartiere",
    title: "Spații verzi pentru cartiere rezidențiale",
  },
  {
    photo: "spatii-verzi-birouri",
    title: "Spații verzi pentru clădiri de birouri",
  },
  {
    photo: "gradini-comerciale",
    title: "Grădini pentru spații comerciale și parcuri industriale",
  },
  {
    photo: "gradini-verticale",
    title: "Grădini verticale exterioare și interioare",
  },
  { photo: "acoperisuri-verzi", title: "Acoperișuri verzi" },
];

const Projects = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="flex flex-col w-full gap-4 px-8 py-4">
      <h3 className="text-2xl font-semibold uppercase text-neutral-content opacity-80">
        Serviciile noastre
      </h3>

      <ul className="grid grid-cols-3 gap-5 text-base cards">
        {SERVICES.map((item, i) => (
          // <li
          //   key={item.title}
          //   onClick={() => setSelectedItem(i)}
          //   className="px-4 py-2 cursor-pointer bg-base-300 rounded-xl"
          // >
          //   {item.title}
          // </li>
          <ProjectCard photo={item.photo} title={item.title} />
        ))}
      </ul>
      {/* <div className="flex flex-col w-8/12 gap-4">
          <img
            src={`/images/${SERVICES[selectedItem].photo}.jpg`}
            alt="service"
            className="object-cover h-full w-96"
          />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            tempora nam alias exercitationem dolore quia illum sapiente
            voluptatum explicabo suscipit ipsa, provident illo commodi
            consequatur itaque accusamus consectetur velit odit?
          </span>
        </div> */}
    </div>
  );
};

export default Projects;

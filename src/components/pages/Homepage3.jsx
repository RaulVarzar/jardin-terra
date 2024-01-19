import React from "react";
import Navbar from "../Navbar";
import { ProjectCard } from "../ProjectCard";

import banner from "/home2.jpg";
import logo from "/logo.png";
import Accordion from "../Accordion";

const Homepage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen p-0 text-2xl font-bold bg-base-200 text-accent ">
      <div className="relative w-full h-screen p-0 mx-auto overflow-hidden place-content-center rounded-b-4xl ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute left-0 right-0 z-10 w-full -bottom-1"
        >
          <path
            fill-opacity="1"
            className="fill-base-200"
            d="M0,64L60,58.7C120,53,240,43,360,74.7C480,107,600,181,720,202.7C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            data-darkreader-inline-fill=""
          ></path>
        </svg>

        <img
          src={banner}
          className="object-cover w-full h-full brightness-75"
          alt="banner-img"
        />
        <div className="absolute top-0 left-0 flex flex-col justify-between w-full h-full gap-6 pt-24 pl-32">
          <img src={logo} className="w-48 h-auto" alt="" />
          <div className="z-50 flex flex-col justify-center pb-24 ">
            <div className="flex flex-col px-12 py-8 gap-y-8 w-fit rounded-2xl">
              <h3 className="max-w-2xl text-3xl font-normal leading-none tracking-wider text-gray-100 lg:text-5xl">
                Proiectăm spații verzi în armonie cu natura
              </h3>
              <div className="flex flex-row gap-10 ">
                <button className="px-12 py-3 text-xl font-normal text-base-100 rounded-xl w-fit bg-primary">
                  CONTACTEAZĂ-NE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-4/12 h-full gap-8 p-3">
        <div className="flex flex-col items-center justify-end flex-grow gap-6">
          {/* <Accordion /> */}
          <div className="flex flex-col items-center justify-center w-full gap-4 px-8 py-6 rounded-3xl bg-base-20">
            <div className="flex flex-row items-center w-full gap-2 px-2 text-2xl font-normal text-left text-neutral">
              <h3>PROIECTE</h3>
              <i className="text-lg fa-solid fa-arrow-right-long"></i>
            </div>
            <ul className="grid grid-cols-3 gap-5 ">
              <li>
                <ProjectCard photo={"gradini-private"} />
              </li>
              <li>
                <ProjectCard photo={"spatii-verzi-birouri"} />
              </li>
              <li>
                <ProjectCard photo={"spatii-verzi-cartiere"} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

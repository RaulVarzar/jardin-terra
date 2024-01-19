import React from "react";
import Navbar from "../Navbar";
import { ProjectCard } from "../ProjectCard";

import banner from "/home2.jpg";
import logo from "/logo.png";
import Accordion from "../Accordion";

const Homepage = () => {
  return (
    <div className="flex flex-row w-full h-screen p-4 text-2xl font-bold text-accent place-content-center">
      <div className="relative w-8/12 overflow-hidden shadow-2xl place-content-center rounded-4xl">
        <img
          src={banner}
          className="object-cover w-auto h-full brightness-75 "
          alt="banner-img"
        />
        <div className="absolute top-0 left-0 flex flex-col justify-between w-full h-full gap-6 pt-16 pl-20">
          <img src={logo} className="w-32 h-auto" alt="" />
          <div className=" justify-center flex-grow flex flex-col max-h-[600px] ">
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
        <Navbar />
        <div className="flex flex-col items-center justify-end flex-grow gap-6">
          {/* <Accordion /> */}
          <div className="flex flex-col items-center justify-center w-full gap-4 px-8 py-6 rounded-3xl bg-base-20">
            <div className="flex flex-row items-center w-full gap-2 px-10 text-2xl font-normal text-left">
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

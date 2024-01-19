import Carousel from "../Carousel";
import Projects from "../Projects";
import Socials from "../Socials";
import Header from "../Header";

const Homepage = () => {
  return (
    <div className="flex flex-row w-full place-content-center">
      <div className="flex flex-col-reverse xl:flex-row max-w-[2100px] px-12 pt-2 pb-8 gap-12">
        <div className="flex flex-col items-center justify-between h-full gap-8 xl:w-1/2 2xl:w-5/12">
          <div className="flex flex-col w-full justify-evenly grow">
            <Header />
            <Projects />
          </div>

          <Socials />
        </div>

        <div className="xl:w-1/2 2xl:w-7/12 max-h-[1100px]">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

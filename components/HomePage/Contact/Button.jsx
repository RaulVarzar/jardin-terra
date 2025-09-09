import { motion } from "framer-motion";
import MagneticButton from "../../MagneticButton";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Button = () => {
  return (
    <MagneticButton
      magnify={1.05}
      amount={[16, 8]}
      href="/contact"
      className="flex items-center gap-6 px-4 md:px-6 xl:px-8 xl:pl-12 py-8 md:pt-20 tracking-wide uppercase  rounded-2xl shadow-md text-md md:text-lg xl:text-xl font-black bg-neutral-content text-base-200 hover:cursor-pointer"
    >
      {/* <ScaleIn duration={1.3} delay={1}> */}

      <p className="font-bold text-xl sm:text-2xl text-center xl:text-3xl leading-tight">
        Trimite-ne un mesaj
      </p>
      <motion.span className="text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl ">
        <BsArrowUpRightCircle />
      </motion.span>

      {/* </ScaleIn> */}
    </MagneticButton>
  );
};

export default Button;

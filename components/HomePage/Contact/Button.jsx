import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./button-styles.module.css";

import { BiMessageSquareDots } from "react-icons/bi";
import { BsArrowUpRightCircle } from "react-icons/bs";

import MagneticButton from "../../MagneticButton";
import { ScaleIn } from "../../utils/animations";
import Link from "next/link";

const Button = () => {
  return (
    <MagneticButton
      magnify={1.05}
      amount={[16, 8]}
      href="/contact"
      className={styles.button}
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

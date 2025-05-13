import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./button-styles.module.css";

import { BiMessageSquareDots } from "react-icons/bi";
import { BsArrowUpRightCircle } from "react-icons/bs";

import MagneticButton from "../../MagneticButton";
import { ScaleIn } from "../../utils/animations";
import Link from "next/link";

const Button = () => {
  return (
    <MagneticButton magnify={1.05} amount={[10, 6]}>
      <ScaleIn duration={1.3} delay={1}>
        <Link href="/contact" className={styles.button}>
          <p className="font-bold text-2xl sm:text-3xl leading-tight">
            Trimite-ne un mesaj
          </p>
          <motion.span className="text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl ">
            <BsArrowUpRightCircle />
          </motion.span>
        </Link>
      </ScaleIn>
    </MagneticButton>
  );
};

export default Button;

import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./button-styles.module.css";

import { BiMessageSquareDots } from "react-icons/bi";
import MagneticButton from "../../MagneticButton";
import { ScaleIn } from "../../utils/animations";

const Button = () => {
  return (
    <MagneticButton magnify={1.05} amount={[8, 4]}>
      <ScaleIn duration={1}>
        <motion.button href="/contact" className={styles.button}>
          <p>Trimite-ne un mesaj</p>
          <motion.span className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
            <BiMessageSquareDots />
          </motion.span>
        </motion.button>
      </ScaleIn>
    </MagneticButton>
  );
};

export default Button;
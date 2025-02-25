import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

import Link from "next/link";
import { RiHome5Line } from "react-icons/ri";
import MagneticButton from "../../components/MagneticButton";

const Contact = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-base-300 lg:flex-row">
      <Link href="/">
        <MagneticButton
          variants={{
            hidden: {
              opacity: "0%",
              x: -50,
            },
            visible: {
              x: 0,
              opacity: "100%",
              transition: {
                duration: 1,
                delay: 2.6,
                ease: [0.6, 0, 0.35, 1],
              },
            },
          }}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05, opacity: "100%" }}
          className="fixed grid p-3 xl:p-4 rounded-full place-content-center text-2xl sm:text-3xl xl:text-4xl z-50 bg-primary-content text-neutral-content top-4 left-4 sm:top-10 sm:left-10"
        >
          <RiHome5Line />
        </MagneticButton>
      </Link>
      <div className="flex items-center sticky top-0 h-fit lg:w-1/3 w-full justify-center min-w-fit lg:h-screen lg:justify-center lg:pl-20 2xl:pl-24 3xl:px-36 max-lg:min-h-[50vh] grow text-neutral-content">
        <ContactDetails />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;

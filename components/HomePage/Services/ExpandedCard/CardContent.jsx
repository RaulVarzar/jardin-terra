import { motion } from "framer-motion";
import { Steps } from "./Steps";

export const CardContent = ({ item }) => {
  const { title, photo, descriptions, steps } = item;

  const filtered = descriptions.slice(1, descriptions.length);

  return (
    <div className="relative fade-vertical z-20 flex flex-col xl:col-span-4 sm:gap-2 px-2 pt-10 pb-4 md:py-12  w-full  max-xl:row-span-5 md:px-5 xl:px-12 overflow-y-auto">
      <motion.h1
        layoutId={title}
        className="p-0 pb-4 my-0 text-2xl font-semibold uppercase leading-none md:text-4xl xl:text-5xl text-neutral-content"
      >
        {title}
      </motion.h1>
      <motion.h3
        layoutId={descriptions[0].content}
        layout="size"
        className="text-sm font-light leading-tight tracking-tight md:leading-tight md:tracking-wider xl:text-base opacity-100 text-neutral-content"
      >
        {descriptions[0].content}
      </motion.h3>
      <div className="flex flex-col gap-12  pt-1 pb-4 ">
        <div className="flex flex-col gap-1 md:gap-2 ">
          {filtered.map((description, i) => (
            <motion.div
              key={description.content}
              variants={{
                hidden: { filter: "blur(3px)", opacity: 0 },
                visible: { filter: "blur(0px)", opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25 + i * 0.05,
                ease: "easeInOut",
              }}
              className="flex flex-col gap-2"
            >
              <h3 className="text-base font-semibold leading-none tracking-wide md:text-lg xl:text-xl 2xl:text-3xl text-neutral-content">
                {description.title}
              </h3>
              <h5
                className={
                  "text-sm font-extralight   leading-tight tracking-tight md:leading-tight md:tracking-wider xl:text-base  text-neutral-content " +
                  (description.title.length > 0 && " pl-2")
                }
              >
                {description.content}
              </h5>
            </motion.div>
          ))}
        </div>

        {steps.steps.length > 0 && <Steps steps={steps} />}
      </div>
    </div>
  );
};

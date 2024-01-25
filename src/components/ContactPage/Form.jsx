import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Form = ({ container }) => {
  function handleForm(e) {
    e.preventDefault();
    console.log('sent');
  }

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', '1.4 1'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.form
      style={{ scale, opacity: scale }}
      onSubmit={handleForm}
      className="w-full max-w-6xl px-2 mt-10 lg:px-24 2xl:px-36"
    >
      <motion.div ref={ref} className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input
            type="text"
            name="name"
            className="peer block w-full appearance-none border-0 tracking-wider border-b-1 border-neutral-content border-opacity-45 bg-transparent py-2.5 px-0 text-primary-content text-2xl focus:border-opacity-80 focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label className="absolute top-3 -z-10 opacity-80 origin-[0] font-light -translate-y-6  transform text-base md:text-lg text-neutral-content duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:opacity-40">
            Nume
          </label>
        </div>
        <div className="relative z-0">
          <input
            type="text"
            name="email"
            className="peer block w-full appearance-none border-0 tracking-wider border-b-1 border-neutral-content  border-opacity-45 bg-transparent py-2.5 px-0 text-2xl text-primary-content focus:border-opacity-80 focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label className="absolute top-3 -z-10 origin-[0] opacity-80 font-light -translate-y-6  transform text-base md:text-lg text-neutral-content duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:opacity-40">
            Adresă de email
          </label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea
            name="message"
            rows="5"
            className="peer block w-full appearance-none border-0 tracking-wider border-b-1 border-neutral-content  border-opacity-45 bg-transparent py-2.5 px-0 text-2xl text-primary-content focus:border-opacity-80 focus:outline-none focus:ring-0"
            placeholder=" "
          ></textarea>
          <label className="absolute top-3 -z-10 origin-[0] opacity-80 font-light -translate-y-6 transform text-base md:text-lg text-neutral-content duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:opacity-40">
            Mesajul tău
          </label>
        </div>
      </motion.div>
      <motion.button
        type="submit"
        className="flex items-center gap-6 px-8 py-3 mt-5 text-lg transition duration-300 rounded-md group border-neutral-content border-1 text-neutral-content opacity-60 hover:opacity-100"
      >
        Send Message
        <i className="transition-transform duration-300 fa-regular fa-paper-plane group-hover:rotate-45"></i>
      </motion.button>
    </motion.form>
  );
};

export default Form;

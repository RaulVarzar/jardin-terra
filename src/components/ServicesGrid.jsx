import { motion } from 'framer-motion';

const SERVICES = [
  { photo: 'gradini-private', title: 'Grădini private' },
  {
    photo: 'spatii-verzi-cartiere',
    title: 'Spații verzi pentru cartiere rezidențiale',
  },
  {
    photo: 'spatii-verzi-birouri',
    title: 'Spații verzi pentru clădiri de birouri',
  },
  {
    photo: 'gradini-comerciale',
    title: 'Grădini pentru spații comerciale și parcuri industriale',
  },
  {
    photo: 'gradini-verticale',
    title: 'Grădini verticale exterioare și interioare',
  },
  { photo: 'acoperisuri-verzi', title: 'Acoperișuri verzi' },
];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-2 xl:gap-8 max-w-7xl">
      {SERVICES.map((card, index) => {
        return (
          <motion.div key={card.title} className="w-full ">
            <div className="flex flex-col items-center justify-center h-full p-2 transition duration-300 cursor-pointer rounded-2xl hover:bg-primary-content bg-base-content hover:scale-105">
              <img
                src={`/images/${card.photo}.jpg`}
                alt={card.photo}
                className="object-cover w-full h-full transition duration-300 rounded-xl "
              />
              <h1 className="flex items-center px-2 py-4 font-normal leading-tight text-center w-fit text-md min-h-24 text-neutral-content">
                {card.title}
              </h1>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServicesGrid;

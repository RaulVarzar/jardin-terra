import { motion } from 'framer-motion';
import { FC, useState } from 'react';

const Carousel = ({ cards, imageWidth = 240 }) => {
  const [page, setPage] = useState(0);

  const paginate = (direction) => {
    setPage(page + direction);
  };

  return (
    <div className="flex flex-col w-full max-w-5xl gap-2 mx-auto">
      <div className="flex items-center overflow-hidden align-middle">
        <div className="grid items-center grid-cols-2 align-middle sm:grid-cols-3 xl:flex">
          {cards.map((card, index) => {
            return (
              <motion.div
                key={card.title}
                className={'aspect-4/5 w-full ' + ` xl:w-[240px]`}
                animate={{
                  opacity: index < page ? 1 : 1,
                  x: index - page * imageWidth,
                }}
                transition={{ type: 'spring', damping: 20 }}
              >
                <div className="w-full h-full p-2 overflow-hidden">
                  <div className="flex flex-col h-full p-2 transition duration-300 cursor-pointer rounded-2xl hover:bg-primary-content bg-base-content hover:scale-105">
                    <img
                      src={`/images/${card.photo}.jpg`}
                      alt={card.photo}
                      className="object-cover w-full h-full transition duration-300 rounded-xl"
                    />
                    <h1 className="flex items-center px-2 py-4 text-base font-normal leading-tight min-h-24 text-neutral-content">
                      {card.title}
                    </h1>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="items-center justify-start hidden gap-8 px-4 text-2xl xl:flex text-neutral-content">
        <button
          onClick={() => paginate(-1)}
          disabled={page === 0}
          className={page === 0 ? 'opacity-40' : ''}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          onClick={() => paginate(+1)}
          disabled={page === cards.length - 2}
          className={page === cards.length - 2 ? 'opacity-40' : ''}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

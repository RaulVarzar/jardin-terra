import { useState } from 'react';

const PRICING = [
  {
    title: 'Dimensiunea spațiului',
    description:
      'Costurile proiectării unui spațiu verde sunt direct proporționale cu dimensiunea sa.',
  },
  {
    title: 'Complexitatea designului',
    description:
      'Dacă proiectul implică elemente de design complexe, cum ar fi construcții de teren, aplicații de apă, scări sau alte elemente decorative, costurile vor fi diferite.',
  },
  {
    title: 'Materialele utilizate',
    description:
      'Costurile pentru materialele utilizate în proiectare pot varia considerabil în funcție de cantitatea, calitatea dar și disponibilitatea acestora pe piață. Pentru stabilirea costurilor etapelor de proiectare, este recomandat să cunoaștem și prețurile furnizorilor de servicii și materie primă, pentru a avea un buget total al activității de amenajare sau reamenajare a spațiului. De asemenea, este important să acordăm atenție costurilor ulterioare, precum întreținerea, pentru a asigura o planificare financiară adecvată.',
  },
];

const PricingCollapse = () => {
  const [selected, setSelected] = useState(null);
  function handleSelect(id) {
    setSelected(id);
  }

  return (
    <div className="w-full gap-2 mx-auto join join-vertical">
      {PRICING.map((category, i) => (
        <div
          key={category.title}
          className="border border-t-0 border-x-0 border-b-1 border-neutral-content border-opacity-15 collapse join-item "
          onClick={() => handleSelect(i)}
          checked={selected === i}
        >
          <input type="radio" name="my-accordion" />
          <div
            className={
              'flex flex-row items-center justify-between gap-4 text-xl font-medium collapse-title text-neutral-content transition duration-300 ' +
              (selected !== i && ' opacity-50')
            }
          >
            <h3 className="text-xl font-normal grow xl:text-2xl ">
              {category.title}
            </h3>
            <i
              className={
                'fa-solid fa-plus transition duration-300 ' +
                (selected === i && ' rotate-90')
              }
            />
          </div>
          <div className="px-2 font-light opacity-75 md:px-6 xl:px-12 text-neutral-content xl:text-md collapse-content">
            <p className="py-3">{category.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCollapse;

import Carousel from './ServiceCarousel';

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

const Services = () => {
  return (
    <div className="flex flex-col w-full gap-4 px-8 py-4 mx-auto">
      <div className="flex justify-center w-full">
        <Carousel cards={SERVICES} />
      </div>
    </div>
  );
};

export default Services;

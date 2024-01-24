const Footer = () => {
  return (
    <div className="flex justify-center py-8 text-accent">
      <div className="grid w-full grid-cols-2 max-w-8xl">
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <h3 className="text-3xl">FOOTER</h3>
        </div>
        <div className="flex flex-row gap-4 px-4 py-2 font-light">
          <div className="flex flex-col items-center h-full text-xl justify-evenly">
            <i className="fa-regular fa-envelope" />
            <i className="fa-solid fa-location-dot" />
            <i className="fa-solid fa-phone" />
          </div>
          <span className="flex flex-col items-start h-full text-xl tracking-wide justify-evenly">
            <p> office@jardinterra.ro</p>
            <p>Cluj-Napoca, RO</p>
            <p>0737 837 383</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

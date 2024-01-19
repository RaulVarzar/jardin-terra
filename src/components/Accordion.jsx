const Accordion = () => {
  return (
    <div className="w-full join join-vertical">
      <div className="border collapse collapse-arrow join-item border-base-300">
        <input type="radio" name="my-accordion-4" checked="checked" />
        <div className="text-xl font-medium collapse-title">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="border collapse collapse-arrow join-item border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="text-xl font-medium collapse-title">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="border collapse collapse-arrow join-item border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="text-xl font-medium collapse-title">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

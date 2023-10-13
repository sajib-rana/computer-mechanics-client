const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <p className="text-orange-600 mb-2 text-2xl font-bold">--- {subHeading} ---</p>
      <h3 className="text-3xl font-bold text-black uppercase border-y-4 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;

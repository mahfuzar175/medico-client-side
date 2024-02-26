const HeadingSection = ({ title, description }) => {
  return (
    <div className="text-center mb-8 mt-12">
      <h4 className="font-semibold text-xl text-blue-500">{title}</h4>
      <h2 className="font-semibold text-3xl md:text-5xl text-blue-900">
        {description}
      </h2>
    </div>
  );
};

export default HeadingSection;

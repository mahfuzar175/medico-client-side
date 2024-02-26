const HeadingSection = ({title, description}) => {
  return (
    <div className="text-center mb-4">
      <h4 className="font-semibold text-lg text-blue-500">{title}</h4>
      <h2 className="font-bold text-3xl md:text-4xl text-blue-900">
        {description}
      </h2>
    </div>
  );
};

export default HeadingSection;

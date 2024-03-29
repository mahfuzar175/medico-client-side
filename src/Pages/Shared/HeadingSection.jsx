const HeadingSection = ({ title, description }) => {
  return (
    <div className="text-center mb-8 mt-[118px] font-poppins">
      <h4 className="font-semibold text-xl text-blue-500">{title}</h4>
      <h2 className="font-bold text-3xl md:text-5xl text-blue-900">
        {description}
      </h2>
    </div>
  );
};

export default HeadingSection;

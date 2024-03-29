import HeadingSection from "../../Pages/Shared/HeadingSection";
import img1 from "../../assets/Images/Doctor1.jpg";
import img2 from "../../assets/Images/Doctor2.jpg";
import img3 from "../../assets/Images/Doctor3.jpg";

const ExpartDoctors = () => {
  return (
    <div className="mb-16">
      <HeadingSection
        title="Team Members"
        description="Our Expert Doctors"
      ></HeadingSection>
      <div className="flex justify-center items-center font-poppins">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* 1st card */}
          <div className="xl:w-96 p-4 hover:text-blue-500">
            <div>
            <img src={img1} alt="" className="hover:scale-105 duration-200"/>
            </div>
            <div className="text-center mt-2">
              <h2 className="font-bold text-2xl text-blue-900">Devid Miller</h2>
              <p className="font-semibold">Orthopedics</p>
            </div>
          </div>
          {/* second card */}
          <div className="xl:w-96 p-4 hover:text-blue-500">
            <div>
            <img src={img2} alt="" className="hover:scale-105 duration-200"/>
            </div>
            <div className="text-center mt-2">
              <h2 className="font-bold text-2xl text-blue-900">Jessy Alia</h2>
              <p className="font-semibold">Pediatrics</p>
            </div>
          </div>
          {/* third card */}
          <div className="xl:w-96  p-4 hover:text-blue-500">
            <div>
            <img src={img3} alt="" className="hover:scale-105 duration-200"/>
            </div>
            <div className="text-center mt-2">
              <h2 className="font-bold text-2xl text-blue-900">Morgan Trace</h2>
              <p className="font-semibold">Orthopedics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpartDoctors;

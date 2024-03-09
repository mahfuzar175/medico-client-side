import { CiCircleCheck } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="lg:px-24 px-16 mt-[110px] font-poppins">
      <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-4">
        <div className="lg:w-1/2">
          <div className="text-center space-y-6">
            <h4 className="font-semibold text-xl text-blue-500 text-center">
              About Us
            </h4>
            <h2 className="font-bold text-left text-3xl md:text-5xl text-blue-900">
              Your Journey to Better Health Starts Here
            </h2>
            <p className="text-left text-blue-950 font-medium">
              We are a team of highly skilled and experienced medical <br />{" "}
              professionals, including doctors, nurses, specialists, and <br />{" "}
              support staff, with a commitment to excellence
            </p>
            <div className="text-left space-y-2">
              <div className="flex justify-left items-center font-medium">
                <CiCircleCheck className="text-blue-600" />
                <h2 className="ml-2 text-blue-950">Comprehensive Care</h2>
              </div>
              <div className="flex justify-left items-center font-medium">
                <CiCircleCheck className="text-blue-600" />
                <h2 className="ml-2 text-blue-950">Access and Convenience</h2>
              </div>
              <div className="flex justify-left items-center font-medium">
                <CiCircleCheck className="text-blue-600" />
                <h2 className="ml-2 text-blue-950">Access and Convenience</h2>
              </div>
              <div className="flex justify-left items-center font-medium">
                <CiCircleCheck className="text-blue-600" />
                <h2 className="ml-2 text-blue-950">
                  Patient-Centered Approach
                </h2>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-start items-center gap-4">
              <a
                className="block w-full rounded-full border hover:bg-blue-900 hover:text-white border-blue-900 px-4 py-4 font-semibold text-blue-900 text-xl shadow sm:w-auto"
                href="#"
              >
                <di className="flex justify-center items-center gap-1">
                  {" "}
                  More About Us
                  <MdArrowOutward />
                </di>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <div className="flex flex-col gap-6 relative">
            <img
              className="rounded-lg"
              src="https://i.ibb.co/jHzB1Yg/a.jpg"
              alt=""
            />
            <img
              className="rounded-lg"
              src="https://i.ibb.co/982drDm/b.jpg"
              alt=""
            />
            <img
              className="hidden sm:block rounded-full w-32 absolute bg-white ml-[520px] mt-[200px]"
              src="https://i.ibb.co/b3yFw3B/chaka.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import { MdArrowOutward } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoBagAddOutline } from "react-icons/io5";

const LatestPost = () => {
  return (
    <div className="font-poppins mt-4">
      <div className="mb-8 mt-[118px] lg:px-12 px-6">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="text-center md:text-start">
            <h4 className="font-semibold text-xl text-blue-500">Our Blog</h4>
            <h2 className="font-bold text-3xl md:text-5xl text-blue-900">
              Our Latest Posts
            </h2>
          </div>
          <div>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                <a
                  className="block w-full rounded-full border hover:bg-blue-900 hover:text-white border-blue-900 px-4 py-4 font-semibold text-blue-900 text-xl shadow sm:w-auto"
                  href="#"
                >
                 <di className="flex justify-center items-center gap-1"> Read All Posts<MdArrowOutward /></di>
                </a>
              </div>
          </div>
        </div>
      </div>
      {/* <HeadingSection title="Blog & News" description="Our Latest Posts" /> */}
      <div className="flex justify-center items-center">
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:gap-14 gap-6 lg:px-12 px-6">
        <div className="space-y-5 text-blue-900 hover:text-blue-600">
          <div className="rounded-lg overflow-hidden block">
            <img
              className="hover:scale-105 ease-in duration-300"
              src="https://i.ibb.co/F6T6JBC/1.jpg"
            />
          </div>
          <h4 className="font-semibold text-3xl">
            Exploring Breakthroughs and Best Practices.
          </h4>
          <p className="font-medium text-gray-800">
            In the ever-evolving field of medicine, breakthroughs and best
            practices always shape the landscape of healthcare.
          </p>
          <div className="flex justify-between items-center">
            <h2 className="font-medium lg:text-lg text-[11px] text-gray-500 flex justify-center items-center">
              <span className="mr-1 text-blue-600">
                <IoBagAddOutline />
              </span>
              Mental Health
            </h2>
            <h2 className="font-medium lg:text-lg text-[11px] text-gray-500 flex justify-center items-center">
              <span className="mr-1 text-blue-600">
                <FaRegCalendarAlt />
              </span>
              November 20, 2023
            </h2>
            <h2 className="font-medium lg:text-lg text-[11px] text-gray-500 flex justify-center items-center">
              <span className="mr-1 text-blue-600">
                <IoPersonOutline />
              </span>
              Richard Alan
            </h2>
          </div>
        </div>
        <div className="space-y-5 text-blue-900 hover:text-blue-600">
          <div className="rounded-lg overflow-hidden block">
            <img
              className="hover:scale-105 ease-in duration-300"
              src="https://i.ibb.co/KjHhVb8/2.jpg"
            />
          </div>
          <h4 className="font-semibold text-3xl">
            Demystifying Common Myths About Vaccines.
          </h4>
          <p className="font-medium text-gray-800">
            Vaccines have long been an important tool in protecting public
            health, yet various lies and misinformation persist about them.
          </p>
          <div className="flex justify-between items-center">
            <h2 className="font-medium lg:text-lg text-[11px] text-gray-500 flex justify-center items-center">
              <span className="mr-1 text-blue-600">
                <IoBagAddOutline />
              </span>
              Mental Health
            </h2>
            <h2 className="font-medium lg:text-lg text-[11px] text-gray-500 flex justify-center items-center">
              <span className="mr-1 text-blue-600">
                <FaRegCalendarAlt />
              </span>
              November 20, 2023
            </h2>
            <h2 className="font-medium lg:text-lg text-[11px] text-gray-500 flex justify-center items-center">
              <span className="mr-1 text-blue-600">
                <IoPersonOutline />
              </span>
              Richard Alan
            </h2>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LatestPost;

import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FcOnlineSupport } from "react-icons/fc";
import { GiSelfLove } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
const WhyChooseUs = () => {
  return (
    <div className="bg-blue-50 lg:py-28 py-16 mt-[118px] font-poppins">
      <div className="p-12 flex lg:flex-row flex-col justify-between relative items-center gap-4">
        <div className="bg-white p-3 rounded-lg ">

          <img
            className="w-[500px]"
            src="https://i.ibb.co/yqY3J5H/why.jpg"
            alt=""
          />

        </div>
        <div className="lg:w-1/2">
          <div className="space-y-6">
            <h4 className="font-semibold text-xl text-blue-500 text-center">
            Why Choose Us
            </h4>
            <h2 className="font-bold text-left text-3xl md:text-5xl text-blue-900">
            Exceptional Care, Every Patient, Every Day
            </h2>
        
            <div className="flex justify-between p-8 lg:p-4">
              <div className="space-y-2">
                <h2 className="text-2xl text-blue-600"><FaUserDoctor /></h2>
                <h2 className="font-bold">Expert Doctor</h2>
                <p>Our qualified doctors are board- <br />certified in their specialty.</p>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl text-yellow-500"><GiSelfLove  /></h2>
                <h2 className="font-bold">Patient-centered Care</h2>
                <p>We prioritize each patient's <br /> unique needs and preferences.</p>
              </div>
            </div>
            <div className="flex justify-between p-8 lg:p-4">
              <div className="space-y-2">
                <h2 className="text-2xl text-green-600"><FaHome /></h2>
                <h2 className="font-bold">Appointment</h2>
                <p>We are here to assist with your <br /> appointment scheduling.</p>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-2xl "><FcOnlineSupport  /></h2>
                <h2 className="font-bold">24/7 Support</h2>
                <p>We always stand ready to <br /> support you in critical times.</p>
              </div>
            </div>

          </div>
        </div>

        <div className="p-6 bg-white absolute -mt-[450px] ml-80  rounded-md">
            <div className="flex -space-x-2">
              <img
                className="z-40 inline-block border border-cyan-500 h-14 w-14 rounded-full ring-2 ring-white ring-opacity-50"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              />
              <img
                className="z-30 inline-block border border-cyan-500 h-14 w-14 rounded-full ring-2 ring-white ring-opacity-50"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              />
              <img
                className="z-20 inline-block border border-cyan-500 h-14 w-14 rounded-full ring-2 ring-white ring-opacity-50"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              />
              <img
                className="z-10 inline-block border border-cyan-500 h-14 w-14 rounded-full ring-2 ring-white ring-opacity-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              />
            </div>
            <div className="flex  justify-center items-center space-y-2 font-semibold"><MdOutlineStarPurple500 className="mt-2 text-yellow-400" /><h2 className="ml-1 text-blue-950">4.9 (5210 Reviews)</h2></div>
          </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

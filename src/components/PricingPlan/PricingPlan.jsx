import HeadingSection from "../../Pages/Shared/HeadingSection";
import { GiStethoscope } from "react-icons/gi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GiBandageRoll } from "react-icons/gi";

const PricingPlan = () => {
  return (
    <div className="font-poppins pt-6 pb-32 bg-blue-50 mt-24">
        <HeadingSection
        title="Pricing Plan"
        description="Healthcare Plans for You"
      ></HeadingSection>
      <div className="sm:flex sm:flex-col sm:align-center px-10">
        <div className="relative self-center bg-white rounded-lg p-2 flex">
          <button
            type="button"
            className="relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none bg-blue-900 sm:w-auto sm:px-8 border-slate-50 text-white shadow-sm"
          >
            Monthly
          </button>
          <button
            type="button"
            className="ml-0.5 relative w-1/2 border rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 border-transparent text-blue-900"
          >
            Yearly
          </button>
        </div>
        <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
          <div className="border border-blue-50  bg-white hover:border-blue-600  rounded-lg shadow-sm divide-y divide-slate-200 hover:scale-105 ease-in duration-300">
            <div className="p-6 text-center">
                <p className="flex justify-center items-center text-4xl mb-2 text-blue-900"><GiStethoscope /></p>
              <h2 className="text-xl leading-6 font-bold text-blue-900">
              Basic Plan
              </h2>
            
              <p className="mt-4">
                <span className="text-4xl font-bold text-blue-900 tracking-tighter">
                  $17
                </span>

                <span className="text-base font-medium text-slate-500">
                  /mo
                </span>
              </p>
              <a
                href="#"
                className="mt-8 block w-full hover:bg-blue-900 hover:text-white bg-blue-100 text-blue-600 rounded-md py-2 text-sm font-semibold  text-center"
              >
                Get Started Now
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-blue-900 tracking-wide uppercase">
                What's included
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    1 landing page included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    1,000 visits/mo
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    Access to all UI blocks
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    50 conversion actions included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    5% payment commission
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    Real-time analytics
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-blue-50  bg-white hover:border-blue-600 rounded-lg shadow-sm divide-y divide-slate-200 hover:scale-105 ease-in duration-300">
          <div className="p-6 text-center">
                <p className="flex justify-center items-center text-4xl mb-2 text-blue-900"><FaHandHoldingMedical/></p>
              <h2 className="text-xl leading-6 font-bold text-blue-900">
              Standard Plan
              </h2>
            
              <p className="mt-4">
                <span className="text-4xl font-bold text-blue-900 tracking-tighter">
                  $25
                </span>

                <span className="text-base font-medium text-slate-500">
                  /mo
                </span>
              </p>
              <a
                href="#"
                className="mt-8 block w-full hover:bg-blue-900 hover:text-white bg-blue-100 text-blue-600 rounded-md py-2 text-sm font-semibold  text-center"
              >
                Get Started Now
              </a>
            </div>

            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-blue-900 tracking-wide uppercase">
                What's included
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    All Free features
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    5 landing pages included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    50,000 visits/mo
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    1,000 conversion actions included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    1% payment commission
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-blue-50  bg-white hover:border-blue-600 rounded-lg shadow-sm divide-y divide-slate-200 hover:scale-105 ease-in duration-300">
            <div className="p-6 text-center">
                <p className="flex justify-center items-center text-4xl mb-2 text-blue-900"><GiBandageRoll/></p>
              <h2 className="text-xl leading-6 font-bold text-blue-900">
              Premium Plan
              </h2>
            
              <p className="mt-4">
                <span className="text-4xl font-bold text-blue-900 tracking-tighter">
                  $25
                </span>

                <span className="text-base font-medium text-slate-500">
                  /mo
                </span>
              </p>
              <a
                href="#"
                className="mt-8 block w-full hover:bg-blue-900 hover:text-white bg-blue-100 text-blue-600 rounded-md py-2 text-sm font-semibold  text-center"
              >
                Get Started Now
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-blue-900 tracking-wide uppercase">
                What's included
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    All Standard features
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    20 landing pages included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    200,000 visits/mo
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    5,000 conversion actions included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    No payment commission
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;

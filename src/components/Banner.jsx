import { IoIosArrowDropright } from "react-icons/io";
const Banner = () => {
    return (
        <section className="font-poppins lg:mt-24 bg-cover bg-center bg-no-repeat bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700"
        style={{ backgroundImage: "url('https://i.ibb.co/PDF8ZXg/pngtree-minimalistic-technology-medical-medical-banner-poster-background-picture-image-1013773.png')" }}>
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl lg:text-7xl md:text-5xl font-extrabold text-blue-900">
              Your Trusted
                <strong className="font-extrabold text-blue-900 sm:block"> Path to Recovery </strong>
              </h1>
    
              <p className="mt-4 sm:text-xl/relaxed text-slate-600">
              At Medico Hospital, we envision healthcare as a compassionate and collaborative journey towards wellness, not just a service.
              </p>
    
              <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                <a
                  className="block w-full rounded-full border hover:bg-blue-900 hover:text-white border-blue-900 px-8 py-3 font-semibold text-blue-900 text-2xl shadow sm:w-auto"
                  href="#"
                >
                 <di className="flex justify-center items-center gap-1"> Free Consultation<IoIosArrowDropright /></di>
                </a>
              </div>
            </div>
          </div>
        </section>
      );
    }

export default Banner;
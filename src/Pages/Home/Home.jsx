import Banner from "../../components/Banner";
import Company from "../../components/Company";
import Departments from "../../components/Departments/Departments";
import ExpartDoctors from "../../components/ExpartDoctors/ExpartDoctors";
import Stats from "../../components/Stats/Stats";

const Home = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Banner></Banner>
      <Stats></Stats>
      <Departments></Departments>
      <Company></Company>
      <ExpartDoctors></ExpartDoctors>
    </div>
  );
};

export default Home;

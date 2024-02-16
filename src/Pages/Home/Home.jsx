import Banner from "../../components/Banner";
import Company from "../../components/Company";
import Departments from "../../components/Departments/Departments";
import Stats from "../../components/Stats/Stats";

const Home = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Banner></Banner>
      <Departments></Departments>
        <Company></Company>
      <Stats></Stats>
    </div>
  );
};

export default Home;

import Banner from "../../components/Banner";
import Company from "../../components/Company";
import Departments from "../../components/Departments/Departments";
import ExpartDoctors from "../../components/ExpartDoctors/ExpartDoctors";
import ReviewSection from "../../components/ReviewSction/ReviewSection";
import Stats from "../../components/Stats/Stats";

const Home = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Banner></Banner>
      <Stats></Stats>
      <Departments></Departments>
      <Company></Company>
      <ExpartDoctors></ExpartDoctors>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;

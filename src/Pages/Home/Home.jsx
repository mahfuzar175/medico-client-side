import Banner from "../../components/Banner";
import Company from "../../components/Company";
import Departments from "../../components/Departments/Departments";
import ExpartDoctors from "../../components/ExpartDoctors/ExpartDoctors";
import LatestPost from "../../components/LatesPost/LatestPost";
import PricingPlan from "../../components/PricingPlan/PricingPlan";
import ReviewSection from "../../components/ReviewSction/ReviewSection";
import Stats from "../../components/Stats/Stats";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <Departments></Departments>
      <Company></Company>
      <ExpartDoctors></ExpartDoctors>
      <ReviewSection></ReviewSection>
      <PricingPlan></PricingPlan>
      <LatestPost></LatestPost>
    </div>
  );
};

export default Home;

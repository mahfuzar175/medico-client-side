import { useEffect, useState } from "react";
import DepartmentCard from "./DepartmentCard";
import HeadingSection from "../../Pages/Shared/HeadingSection";
const Departments = () => {
  const [department, setDepartment] = useState([]);
  useEffect(() => {
    fetch("departments.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDepartment(data);
      });
  }, []);
  return (
    <div className="font-poppins mb-20 justify-center items-center">
       <HeadingSection title='Our departments' description='Services for Your Health'></HeadingSection>
      <div className="flex justify-center items-center">
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* first card */}
          {
            department.map((item) => <DepartmentCard key={item.id} item={item}></DepartmentCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Departments;

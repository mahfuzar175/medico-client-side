import { useEffect, useState } from "react";
import DepartmentCard from "./DepartmentCard";
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
    <div className="font-poppins p-10 mb-12 mt-4  space-y-2 justify-center items-center">
      <h4 className="font-semibold text-lg text-blue-500">Our departments</h4>
      <h2 className="font-bold text-3xl md:text-4xl text-blue-900">
        Services for Your Health
      </h2>
      <div className="flex justify-center items-center">
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

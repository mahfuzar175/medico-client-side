import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../assets/marquee/1.png";
import img2 from "../assets/marquee/2.png";
import img3 from "../assets/marquee/3.png";
import img4 from "../assets/marquee/4.png";
import img5 from "../assets/marquee/5.png";
import img6 from "../assets/marquee/6.png";
import img7 from "../assets/marquee/7.png";
import img8 from "../assets/marquee/8.png";
import img9 from "../assets/marquee/9.png";
import img10 from "../assets/marquee/10.png";

const Company = () => {
  const imageStyle = {
    width: "80px",
    height: "80px",
  };

  return (
    <div className="mb-24 px-14">
      <Marquee pauseOnHover speed={60}>
        <div className="mr-12">
          <img src={img1} alt="" style={imageStyle} />
        </div>
        <div className="mr-12">
          <img src={img2} alt="" style={imageStyle} />
        </div>
        <div className="mr-12">
          <img src={img3} alt="" style={imageStyle} />
        </div>
        <div className="mr-12">
          <img src={img4} alt="" style={imageStyle} />
        </div>
        <div className="mr-12">
          <img src={img5} alt="" style={imageStyle} />
        </div>
        <div className="mr-12">
          <img src={img1} alt="" style={imageStyle} />
        </div>
        <div className="mr-12">
          <img src={img6} alt="" style={imageStyle} />
        </div>
        <div className="mr-12">
          <img src={img7} alt="" style={imageStyle} />
        </div>
        <div className="mr-12">
          <img src={img8} alt="" style={imageStyle} />
        </div>
        <div className="mr-12">
          <img src={img9} alt="" style={imageStyle} />
        </div>
        <div className="mr-12">
          <img src={img10} alt="" style={imageStyle} />
        </div>
      </Marquee>
    </div>
  );
};

export default Company;

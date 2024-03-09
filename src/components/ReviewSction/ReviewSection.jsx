import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingSection from "../../Pages/Shared/HeadingSection";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };


  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  return (
    <div style={{ textAlign: "center" }} className="mb-24 font-poppins">
      <HeadingSection title="Testimonial" description="Patients Say About Us" />

      <div className="px-14">
        <Slider {...sliderSettings}>
          {reviews.map((review) => (
            <div key={review.id}>
                <div className="relative max-w-sm mx-auto mt-14">
                  <div className="rounded-xl border hover:border-blue-600 overflow-hidden bg-white">
                    <div className="absolute -mt-12 w-full flex justify-center">
                      <div className="h-24 w-24">
                        <img
                          src={review.image}
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 py-6 mt-12">
                    <div className="flex justify-center items-center mb-1">
                        {renderRatingStars(review.rating)}
                        </div>
                        <h1 className="font-semibold text-xl text-center mb-1 text-blue-900 ">
                          {review.name}
                        </h1>
                      
                      <p className="text-blue-600 text-sm text-center">
                        {review.city}
                      </p>
                      <p className="text-center text-gray-800 text-base pt-3 font-medium">
                        {review.review}
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSection;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import axios from "axios";
import StarRatingComponent from "react-star-rating-component";
import Ellips from '../../images/Ellipse 91.png'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Testimonial = () => {
  const [user, loading] = useAuthState(auth);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/allTestimonial").then((res) => setRatings(res.data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-16 mb-20">
      <h1 className="text-center text-4xl font-bold mb-5">Testimonials</h1>
      <div className="">
        <Slider {...settings}>
          {ratings.map((rating) => (
            <div className="" key={rating._id}>
              <div className="card-body">
                <div className="flex mb-3">
                  <div className="avatar mr-4">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={rating?.img || user?.photoURL || Ellips} alt="" />
                    </div>
                  </div>
                  <div>
                    <h3 className="card-title">{rating.name}</h3>
                    <h4>{rating.designation}</h4>
                  </div>
                </div>
                <p className="mb-3">{rating.description}</p>
                <p>
                  <StarRatingComponent className='text-2xl'
                    name="rate1"
                    string={rating.rating}
                    value={5}
                  />
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

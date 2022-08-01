import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import axios from "axios";
import StarRatingComponent from "react-star-rating-component";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    axios.get("testimonial.json").then((res) => setRatings(res.data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto mt-16 mb-20">
      <h1 className="text-center text-4xl font-bold mb-5">Testimonials</h1>
      <div className="">
        <Slider {...settings}>
          {ratings.map((rating) => (
            <div className="card w-96" key={rating._id}>
              <div className="card-body">
                <div className="flex mb-3">
                  <div className="avatar mr-4">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={rating.img} alt="" />
                    </div>
                  </div>
                  <div>
                    <h3 className="card-title">{rating.name}</h3>
                    <h4>{rating.designation}</h4>
                  </div>
                </div>
                <p className="mb-3">{rating.description}</p>
                <p>
                  {/* {[...Array(rating.rating).keys()]} */}
                  <StarRatingComponent className='text-2xl'
                    name="rate1"
                    string={rating.rating}
                    value={5}
                    // onStarClick={this.onStarClick.bind(this)}
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

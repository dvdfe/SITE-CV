import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hobbies = ({developer}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2 className="title">Mes loisirs.</h2>
      <div className="hobbies-container" id="hobbies">
        <Slider {...settings}>
          {developer.hobbies.map((hobby, index) => (
            <div key={index} className="hobbies-card">
              <div className="hobbies-card-title">
                <h2>{hobby.title}</h2>
                <img src={`${process.env.PUBLIC_URL}${hobby.titleImg}`} alt="" className="title-img" />
              </div>
              <p className="hobbies-text">{hobby.description}</p>
              <img src={`${process.env.PUBLIC_URL}${hobby.cardImg}`} alt="" className="card-img" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Hobbies;

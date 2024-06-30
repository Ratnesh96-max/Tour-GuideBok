import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
const Testimonial = () => {
  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        setting: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...setting}>
      <div className="testimonial py-4 py-3">
        <p>
          "I've always dreamed of visiting the historical sites of Greece, and
          my trip exceeded all expectations. Standing in the shadow of the
          Parthenon and wandering through the ruins of Delphi felt like stepping
          back in time
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">john doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Japan's blend of ancient tradition and cutting-edge modernity made for
          a truly unique travel experience.From the serene temples and gardens
          of Kyoto to the bustling streets of Tokyo, each day was a new
          discovery.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Elisa Lee Thomas</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 py-3">
        <p>
          My safari in Tanzania was a dream come true. Seeing the Big Five in
          their natural habitat was an awe-inspiring experience. The Serengeti's
          vast plains and the Ngorongoro Crater's unique ecosystem teemed with
          wildlife.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Cameron Blair</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;

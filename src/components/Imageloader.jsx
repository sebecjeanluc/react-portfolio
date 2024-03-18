import React, { Component } from "react";
import Slider from "react-slick";
import { baseUrl } from "../config";

function LazyLoad() {
  const settings = {
    dots: false,
    fade: true,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container slider--wrapper">
      <Slider {...settings}>
        {/* 450 x 532 */}
        <div>
          <img src={baseUrl + "/suiki_450x532.png"} />
        </div>
        <div>
          <img src={baseUrl + "/weather_450x532.png"} />
        </div>
        <div>
          <img src={baseUrl + "/moodflix_450x532.png"} />
        </div>
        <div>
          <img src={baseUrl + "/onescene_450x532.png"} />
        </div>
        <div>
          <img src={baseUrl + "/pollu_450x532.png"} />
        </div>
      </Slider>
    </div>
  );
}

export default LazyLoad;

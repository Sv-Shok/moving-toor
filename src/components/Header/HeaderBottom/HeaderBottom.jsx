import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "./HeaderBottom.css";
import slide1 from "../../../../src/images/slide1.jpg";
import slide2 from "../../../../src/images/slide2.jpg";
import slide3 from "../../../../src/images/slide3.jpg";
import slide4 from "../../../../src/images/slide4.jpg";
import slide5 from "../../../../src/images/slide5.jpg";
import slide6 from "../../../../src/images/slide6.jpg";
import slide7 from "../../../../src/images/slide7.jpg";


export default class HeaderBottom extends Component {
  render() {
    const settings = {
      autoplay:true,
      dots: true,
      fade: true,
      infinite: true,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      arrows: false
    };
    return (
      <div>
        <Slider {...settings}>
            <img className = "forSliders" src={slide1} alt="slide"/>
            <img className = "forSliders" src={slide2} alt="slide2"/>
            <img className = "forSliders" src={slide3} alt="slide3"/>
            <img className = "forSliders" src={slide4} alt="slide4"/>
            <img className = "forSliders" src={slide5} alt="slide5"/>
            <img className = "forSliders" src={slide6} alt="slide6"/>
            <img className = "forSliders" src={slide7} alt="slide7"/>
        </Slider>
      </div>
    );
  }
}

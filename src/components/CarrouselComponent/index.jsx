"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrousel = ({ children,settings }) => {
 
  const slideStyle = {
    padding: '15px 13px' // Ajuste o padding conforme necessário
  };

  return (
    <Slider {...settings} className="slider">
      {children}
    </Slider>
  );
};

export default Carrousel;

"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrousel = ({data}) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    dots: false,
    arrows: false,
    fade: true,
  };
 
  return (
    <section className="w-full h-full mt-12 p-0 ">
      <Slider {...settings} >
        {data.map((banner, index) => (
          <div className="w-full max-h-[380px] " key={index} >
            <img
              src={banner.cover}
              alt={banner.name}
              className="w-full  h-[350px] md:w-full md:h-full object-cover "
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carrousel;

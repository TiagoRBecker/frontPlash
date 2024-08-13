export function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-3 transform -translate-y-1/2"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 text-gray-500 cursor-pointer hover:text-[#14B7A1]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-3 transform -translate-y-1/2"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 text-gray-500 cursor-pointer hover:text-[#14B7A1]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}
export const settingsMagazineCarrousel = {
    slidesToShow: 5,
    slidesToScroll: 1,

    variableWidth: true,
    adaptiveHeight: true,

  dots:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: true,
          adaptiveHeight: true,
          centerMode: false,
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          variableWidth: false,
          adaptiveHeight: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          variableWidth: false,

          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };
export const  settingsArticlesCarroousel = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    adaptiveHeight: true,
    centerMode: false,
   

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: false,
          adaptiveHeight: true,
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 794,
        settings: {
          variableWidth: false,
          adaptiveHeight: true,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow:null,
          prevArrow:null
        },
      },
      
    ],
  };
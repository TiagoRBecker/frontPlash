import Link from "next/link";

import { baseUrl } from "../../utils/api";
import Carrousel from "../CarrouselComponent";
import TimerComponent from "../../components/Cronometro";
const getEvents = async () => {
  try {
    const get = await fetch(`${baseUrl}/events`, {
      method: "GET",
      cache: "no-cache",
    });
    const response = await get.json();
    return response;
  } catch (error) {
    console.error("Error fetching last magazines:", error);
  }
};
const events = async () => {
  const data = await getEvents();

  const currentDate = new Date();
  function SampleNextArrow(props) {
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

  function SamplePrevArrow(props) {
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
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,

    variableWidth: true,
    adaptiveHeight: true,
    centerPadding: "40px",
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
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
          nextArrow:null,
          prevArrow:null
        },
      },
    ],
  };

  return (
    <section className="container  mx-auto  ">
      <div className="w-full h-full  ">
        <div className="w-full  items-center justify-between px-3 ">
          <h1 className="text-black text-xl pr-2">Eventos</h1>
        </div>
        <Carrousel settings={settings}>
          {data?.map((event, index) => (
           <div
           key={index}
           className="max-w-[200px] relative h-full flex items-center justify-center shadow transition ease-in-out delay-150"
         >
               <img
                 src={event.cover}
                 alt={event.name}
                 className="w-full h-[190px] md:h-[270px] object-fill"
               />

              {currentDate > new Date(Number(event.date_event_end)) ? (
                <Link
                  href={`/events/${event.id}`}
                  className="text-white w-full bg-red-600 flex items-center justify-center py-2 h-14"
                >
                  Encerrado
                </Link>
              ) : currentDate >= new Date(Number(event.date_event_initial)) &&
                currentDate < new Date(Number(event.date_event_end)) ? (
                <Link
                  href={`/events/${event.id}`}
                  className="text-white w-full bg-[#14b7a1] flex items-center justify-center py-2 h-14"
                >
                  Rolando Agora
                </Link>
              ) : (
                <Link
                  href={`/events/${event.id}`}
                  className="w-full bg-[#d9d9d9] flex items-center justify-center py-2 h-14"
                >
                  <TimerComponent startDate={new Date (Number(event.date_event_initial))} />
                </Link>
              )}
            </div>
             
          ))}
        </Carrousel>
      </div>
    </section>
  );
};

export default events;
/*
<div
             key={index}
             className="max-w-[200px] relative h-full flex items-center justify-center shadow transition ease-in-out delay-150"
           >
             <Link href={`/magazine/${magazine.id}`} className="w-full h-full flex items-center justify-center flex-col">
               <button className="w-24 h-6 rounded-md text-white bg-[#14b7a1] absolute top-1 right-3 uppercase text-[12px] font-bold">
                 {magazine.model}
               </button>
              
                <h1 className="w-full text-black font-semibold pl-1 truncate px-3">
                 {magazine.name}
               </h1>
               <span className="w-full pl-1">Edição {magazine.volume}</span>
             </Link>
           </div>

           */
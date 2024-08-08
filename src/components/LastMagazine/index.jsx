import Link from "next/link";

import { baseUrl } from "../../utils/api";
import Carrousel from "../CarrouselComponent";
import GridLayout from "../Grid";

const getLastMagazines = async () => {
  try {
    const get = await fetch(`${baseUrl}/last-magazines`, {
      method: "GET",
      cache: "no-cache",
    });
    const response = await get.json();
    return response;
  } catch (error) {
    console.error("Error fetching last magazines:", error);
  }
};
const LastMagazines = async () => {
  const data = await getLastMagazines();
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
    <section className="container h-full  py-10 mx-auto mt-16">
      {data && data.length > 0 && (
        <div className="w-full h-full">
          <div className="w-full flex items-center justify-between my-5 px-3">
            <h1 className="text-xl font-bold ">Lançamentos</h1>
            <Link href={`/categorias/${data[0].id}`}>
              <h3 className="text-[#14B7A1] md:text-[#14B7A1]">Ver todas</h3>
            </Link>
          </div>
          <div className="w-full   ">
           
            {data && data?.length >= 5 ? (
             <Carrousel settings={settings} className="mb-10">
             {data.map((magazine, index) => (
                 <div
                 key={index}
                 className="max-w-[200px] relative h-full flex items-center justify-center shadow transition ease-in-out delay-150"
               >
                 <Link href={`/magazine/${magazine.id}`} className="w-full h-full flex items-center justify-center flex-col">
                   <button className="w-24 h-6 rounded-md text-white bg-[#14b7a1] absolute top-1 right-3 uppercase text-[12px] font-bold">
                     {magazine.model}
                   </button>
                   <img
                     src={magazine.cover}
                     alt={magazine.name}
                     className="w-full h-[190px] md:h-[270px] object-fill"
                   />
                    <h1 className="w-full text-black font-semibold pl-1 truncate px-3">
                     {magazine.name}
                   </h1>
                   <span className="w-full pl-1">Edição {magazine.volume}</span>
                 </Link>
               </div>
             ))}
           </Carrousel>
            ) : (
              <GridLayout>
                {data?.map((magazine, index) => (
                  <div className="w-full h-full flex flex-col gap-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]   relative">
                    <Link href={`/magazine/${magazine.id}`} key={index}>
                      <div className="">
                        <button className="w-24 h-6 rounded-md text-white bg-[#14b7a1] absolute top-1 right-3 uppercase text-[12px] font-bold">
                          {magazine.model}
                        </button>
                      </div>
                      <img
                        src={magazine.cover}
                        alt={magazine.name}
                        className="w-full h-full sm:h-[250px] object-fill "
                      />
                      <h2 className="text-gray-400  px-1 ">
                        Volume {magazine.volume}
                      </h2>

                      <p className="w-full text-base truncate text-gray-600  px-1 py-2">
                        {magazine.name}
                      </p>

                      <p className="w-full text-base truncate text-gray-600  px-1">
                        {magazine.capa}
                      </p>
                    </Link>
                  </div>
                ))}
              </GridLayout>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default LastMagazines;

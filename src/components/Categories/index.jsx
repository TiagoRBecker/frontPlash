import Link from "next/link";
import { ApiHook, baseUrl } from "../../utils/api";
import Carrousel from "../CarrouselComponent";
import { Suspense } from "react";
import Loading from "../../app/loading";
import GridLayout from "../Grid";

const getCategories = async () => {
  try {
    const response = await ApiHook.catgories()
    
    return response;
  } catch (error) {
    console.log(error);
    
  }

};

const Categories = async () => {
  

  const data = await getCategories();
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
    <Suspense fallback={<Loading />}>
      <section className="container mx-auto h-full   ">
        {data && data.length > 0 && (
          <div>
            
            {data?.map((category, index) => (
              <div className="w-full h-full flex flex-col  " key={index}>
                <div className="w-full flex items-center justify-between my-5 px-3">
                  <h1 className="text-xl font-bold ">{category.name}</h1>
                  <Link href={`/categorias/${category.id}`}>
                    <h3 className="text-[#14B7A1] md:text-[#14B7A1]">
                      Ver todas
                    </h3>
                  </Link>
                </div>

                {category.magazine.length >= 5 ? (
                 
                  <Carrousel settings={settings} >
                    {category.magazine.map((magazine, index) => (
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
                            className="w-full h-[190px] md:h-[270px] object-fill "
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
                    {category.magazine.map((magazine, index) => (
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
                           className="w-full h-[270px] object-fill"
                         />
                          <h1 className="w-full text-black font-semibold pl-1 truncate px-3">
                           {magazine.name}
                         </h1>
                         <span className="w-full pl-1">Edição {magazine.volume}</span>
                       </Link>
                     </div>
                    ))}
                  </GridLayout>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </Suspense>
  );
};

export default Categories;

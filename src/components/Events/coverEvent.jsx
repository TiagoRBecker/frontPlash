"use client";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useEffect, useState } from "react";
import { baseUrl, userUrl } from "../../utils/api";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import GridLayout from "../Grid";
import Carrousel from "../CarrouselComponent";

const Eventes = () => {
  useEffect(() => {
    getCovers();
  }, []);
  const router = useRouter();
  const { data: session } = useSession();
  const [data, setData] = useState([]);
  const [vote, setVote] = useState(false);
  const getCovers = async () => {
    const request = await fetch(`${baseUrl}/cover-events`, {
      method: "GET",
      cache: "no-cache",
    });
    const response = await request.json();
    setData(response);

    return;
  };
  const handleVote = async (slug) => {
    if (!session) {
      router.push("/auth/signin");
      return;
    }
    const token = session.user.accessToken;
    const addVoto = await fetch(`${userUrl}/vote-cover-event/${slug}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await addVoto.json();

    if (!addVoto.ok) {
      Swal.fire({
        icon: "error",
        title: "Voçe já votou!",
        text: `${response.error}`,
      });

      return;
    }

    Swal.fire({
      title: "Obrigado por votar! ",
      text: "Click no botão abaixo para continuar!",
      icon: "success",
    });

    return;
  };

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
    centerMode:false,
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
    <section className="w-full mx-auto h-full    ">
      {data.map((event, index) => (
        <div key={index}>
          <div className="w-full flex flex-col gap-2  md:flex-row item justify-between  px-3">
            <h1 className="text-xl text-gray-400">{event.name}</h1>
            <span className="bg-[#14b7a1] text-white py-2 px-2 rounded-md font-semibold">
              Encerramento:{" "}
              {new Date(Number(event.date_event)).toLocaleDateString()}
            </span>
          </div>
        
        
            <Carrousel settings={settings}>
              {event.cover.map((cover, index) => (
                 <div
                 key={index}
                 className="max-w-[200px] relative h-full flex items-center justify-center shadow transition ease-in-out delay-150"
               >
                  <img
                    src={cover.cover}
                    alt={cover.name}
                    className="w-full h-[190px] md:h-[270px] object-fill"
                  />

                  <p className="w-full text-base truncate text-gray-600  px-1 py-2 ">
                    {cover.name}
                  </p>
                  <p className="w-full text-base truncate text-gray-600 bg-gray-200 px-1 text-center py-2 ">
                    Votos: {cover.countLike}
                  </p>

                  <button
                    onClick={() => handleVote(cover.id)}
                    className="w-full bg-[#14b7a1] text-white py-2 font-bold text-lg"
                  >
                    Votar
                  </button>
                </div>
              ))}
            </Carrousel>
         
        </div>
      ))}
    </section>
  );
};

export default Eventes;

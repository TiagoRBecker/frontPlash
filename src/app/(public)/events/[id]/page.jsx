import { Suspense } from "react";
import { ApiHook} from "../../../../utils/api";
import Loading from "../../../loading";
import Link from "next/link";
import {
  Facebook,
  Whatsapp,
  Twitter,
} from "../../../../components/SocialIcons";
import { headers } from "next/headers";
import TimerComponent from "../../../../components/Cronometro";
import { getDate } from "@/utils/formateDate";

const getEventID = async (id) => {
  try {
    const response = await ApiHook.eventsID(id);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const EventID = async ({ params }) => {
  const currentDate = new Date();
  const heads = headers();

  const fullUrl = heads.get("referer") || "";
  const data = await getEventID(params.id);
 

 
  return (
    <Suspense fallback={<Loading />}>
      <section className="w-full    flex flex-col mt-14">
        <div
          className={`w-full flex flex-col  min-h-[650px] lg:flex-row items-center justify-center `}
          style={{
            backgroundImage: `url('${data?.banner}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat:"no-repeat"
          
          }}
        >
          <div className="w-full lg:w-[50%] h-full    ">
            <div className="w-[80%] lg:w-[60%] relative h-full mx-auto py-10 flex flex-col gap-3 rounded-md">
            <div className="absolute inset-0 bg-black opacity-[50%]"></div>
             <div className="relative z-50 w-full text-left flex items-center  gap-2 text-white">
             <p className=" text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </p>
                <p className="text-left">{data?.views}</p>
             </div>
             <h1 className="relative z-50 text-white uppercase font-bold text-2xl ">
                {data?.name}
              </h1>
              <div className="relative z-50flex gap">

              </div>
              <p className="relative z-50 text-white text-xl    ">
                {getDate(data?.date_event_initial, data?.date_event_end)}
              </p>
              <button className="relative z-50 w-full max-w-[310px] mx-auto h-[60px] bg-[#979797] flex items-center rounded-3xl text-white text-[15px] font-black  uppercase">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center ml-3 mr-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8  text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                      />
                    </svg>
                  </div>
                  Inscrever-se Aqui
                </button>
                </div>
          </div>
          <div className="w-full   h-full lg:flex-row lg:w-[50%]  flex-col items-center   ">
            <img
              src={data?.cover}
              alt={data?.name}
              className="hidden lg:w-[37%] h-full object-fill"
            />
            <div className="w-[80%] mx-auto lg:w-[37%] h-14 ">
              {currentDate > new Date(Number(data?.date_event_end)) ? (
                <div className="text-white w-full bg-red-600 flex items-center justify-center py-2 h-14">
                  Encerrado
                </div>
              ) : currentDate >= new Date(Number(data?.date_event_initial)) &&
                currentDate < new Date(Number(data?.date_event_end)) ? (
                <div className="text-white w-full bg-[#14b7a1] flex items-center justify-center py-2 h-14">
                  Rolando Agora
                </div>
              ) : (
                <div className="w-full  flex items-center justify-center py-2 h-14">
                  <TimerComponent startDate={new Date(Number(data?.date_event_initial))} />
                </div>
              )}
            </div>
          </div>
          
            
        </div>

        <div className="container mx-auto h-full  flex flex-col gap-5 px-10">
          <div className="w-full">
            <h1 className="text-black text-center w-full text-4xl py-10">
              Patrocinadores
            </h1>
            <div className="w-full grid grid-cols-5 gap-2">
              {data?.sponsors.map((sponsors, index) => (
                <Link target="_blank" href={sponsors.url} key={index}>
                  <div className="w-full">
                    <img
                      src={sponsors?.cover}
                      alt={sponsors?.name}
                      className="w-full  h-auto  object-fill"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-black text-left w-full text-2xl py-10 font-bold">
              Maiores Informações
            </h1>
            <div  className="px-3 py-10" dangerouslySetInnerHTML={{ __html: data?.descript }} />
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default EventID;


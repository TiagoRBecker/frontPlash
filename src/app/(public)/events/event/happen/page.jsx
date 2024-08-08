"use client";
import { useState } from "react";
import TimerComponent from "@/components/Cronometro"
import { ApiHook } from "../../../../../utils/api";
import Loading from "../../../../loading";
import Link from "next/link";
import GridLayout from "@/components/Grid";
import { useEffect } from "react";

const Happen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
 

  const getEvents = async () => {
    try {
      
      const response = await ApiHook.events();

      setData(response);
      
      return;
    } catch (error) {
      console.log(error);
      router.push("/error")
    } finally {
      setLoading(false);
    }
  };

  const currentDate = new Date();

 
  


  const getDate = (dateIniti, dateEnd) => {
    const dateStart = new Date(Number(dateIniti));
    const dateFinal = new Date(Number(dateEnd));
    const month = dateStart.getMonth() + 1;
    const startDay = dateStart.getDate();
    const endDay = dateFinal.getDate();
    const formatWithTwoDigits = (value) => value.toString().padStart(2, "0");

    const formattedStartDay = formatWithTwoDigits(startDay);
    const formattedEndDay = formatWithTwoDigits(endDay);

    let nameMonth;
    switch (month) {
      case 1:
        nameMonth = "Janeiro";
        break;
      case 2:
        nameMonth = "Fevereiro";
        break;
      case 3:
        nameMonth = "Março";
        break;
      case 4:
        nameMonth = "Abril";
        break;
      case 5:
        nameMonth = "Maio";
        break;
      case 6:
        nameMonth = "Junho";
        break;
      case 7:
        nameMonth = "Julho";
        break;
      case 8:
        nameMonth = "Agosto";
        break;
      case 9:
        nameMonth = "Setembro";
        break;
      case 10:
        nameMonth = "Outubro";
        break;
      case 11:
        nameMonth = "Novembro";
        break;
      case 12:
        nameMonth = "Dezembro";
        break;
      default:
        nameMonth = "";
    }
    return `${formattedStartDay}/${formattedEndDay} ${nameMonth}`;
  };
 
  const eventToStart = data.filter(
    (date) =>
      new Date(Number(date.date_event_initial)) >= currentDate &&
      new Date(Number(date.date_event_end)) > currentDate
  );
  useEffect(() => {
    getEvents(); // Fetch events on mount
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="w-full h-full mx-auto flex flex-col gap-4 py-10">
      
      <div className="max-w-[1140px] h-full mx-auto">
        <div className="w-full h-full mx-auto ">
         
          <div className="w-full flex flex-col gap-4">
            {
                eventToStart && eventToStart.length > 0 ?
                <>
                <div className="px-4 w-full flex items-center justify-between">
                <h1 className="font-bold uppercase py-10 text-gray-600">
                  Eventos á Acontecer{" "}
                </h1>
               
                
              </div>
                <GridLayout>
                {eventToStart &&
                  eventToStart.length > 0 &&
                  eventToStart?.map((events, index) => (
                    <div
                      key={index}
                      className="max-w-[200px]  h-full flex flex-col items-center justify-center shadow"
                    >
                      <img
                        src={events.cover}
                        alt={events.name}
                        className="w-full h-[190px] md:h-[270px] object-fill"
                      />
                      <p className="font-bold text-lg w-full truncate">
                        {events.name}
                      </p>
  
                      <p className="w-full text-left">
                        {getDate(
                          events.date_event_initial,
                          events.date_event_end
                        )}
                      </p>
                      <p>{events.city}</p>
  
                      <div className="w-full flex items-center justify-center">
                        <Link
                          href={`/events/${events.id}`}
                          className="w-full flex items-center justify-center text-white "
                        >
                          <TimerComponent
                            startDate={
                              new Date(Number(events.date_event_initial))
                            }
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
              </GridLayout>
              </>
                :
                <div className="w-full h-[50vh] flex items-center justify-center">
                <p className="text-gray-400">Nenhum evento agendado no momento!</p>
              </div>
            }
          
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Happen;

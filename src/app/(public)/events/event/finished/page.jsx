"use client";
import {  useState } from "react";

import { ApiHook } from "../../../../../utils/api";
import Loading from "../../../../loading";
import Link from "next/link";
import GridLayout from "@/components/Grid";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getDate } from "@/utils/formateDate";

const Finished = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
   const router= useRouter()

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

  const eventEnd = data.filter(
    (date) =>
      new Date(Number(date.date_event_initial)) < currentDate &&
      new Date(Number(date.date_event_end)) < currentDate
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
          <div className="px-4 w-full flex items-center justify-between">
            <h1 className="font-bold uppercase py-10 text-gray-600">
              Eventos Encerrados{" "}
            </h1>
           
          </div>
          <div className="w-full flex flex-col gap-4">
            <GridLayout>
              {eventEnd &&
                eventEnd.length > 0 &&
                eventEnd?.map((events, index) => (
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
                        className="w-full flex items-center justify-center bg-red-700 py-5 text-white "
                      >
                        <p>Encerrados</p>
                      </Link>
                    </div>
                  </div>
                ))}
            </GridLayout>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finished;

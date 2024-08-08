"use client";
import React, { useEffect } from "react";
import Countdown from "react-countdown";
const MyCountdown = ({ endDate,startDate, currentDate }) => {
  // Função para renderizar o cronômetro
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if(completed){
      return <p className="w-full py-5 bg-green-700 text-white text-center">Evento Iniciado</p>
    }
    
    else{
      return (
        <div className="w-full flex flex-col items-center justify-center gap-2 bg-gray-300">
          <div className="flex gap-2">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center">
                <p className="text-[28px] flex items-center justify-center">
                  {String(days).padStart(2, "0")}
                </p>
                <p>:</p>
              </div>
              <p className="text-[11px]">Dias</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center">
                <p className="text-[28px] flex items-center justify-center">
                  {String(hours).padStart(2, "0")}
                </p>
                <p>:</p>
              </div>
              <p className="text-[11px]">Horas</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center">
                <p className="text-[28px] flex items-center justify-center">
                  {String(minutes).padStart(2, "0")}
                </p>
                <p>:</p>
              </div>
              <p className="text-[11px]">Min</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center">
                <p className="text-[28px] flex items-center justify-center">
                  {String(seconds).padStart(2, "0")}
                </p>
                <p>:</p>
              </div>
              <p className="text-[11px]">Sec</p>
            </div>
          </div>
        </div>
      );
    }
    
  };
  

  return (
    <div className="w-full">
      <Countdown date={startDate} renderer={renderer} />
    </div>
  );
};

export default MyCountdown;

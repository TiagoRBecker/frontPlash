"use client";
import { baseUrl } from "../../../utils/api";
import React, { useEffect, useRef, useState } from "react";
import { getCookie } from "cookies-next";
const OTPInput = ({ length = 4, setNextStep }) => {
  const email =  getCookie("email", {
    path: "/",
  });
  const [seconds, setSeconds] = useState(120); // 2 minutos = 120 segundos
  const [hideTimer, setHideTimer] = useState(true)
  const [ showCod, setSHowCOd] = useState(false)
  const [OTP, setOTP] = useState(Array(length).fill(""));
  const [error, setError] = useState("");
  useEffect(() => {
    if(hideTimer){

    
    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev === 0) {
          clearInterval(interval);
          setHideTimer(false)
          setSHowCOd(true)
        } else {
          return prev - 1;
        }
      });
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval);
  }
  }, [hideTimer]); // Executa apenas uma vez na montagem do componente

  // Função para formatar o tempo em minutos e segundos
  const  cronometroTimer =(seconds)=> {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  }

  const inputRef = useRef(Array(length).fill(null));

  
  const handleTextChange = (input, index) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    // check if the user has entered the first digit, if yes, automatically focus on the next input field and so on.

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  // return the inputs component
  const handleSubmit = async (e) => {
    setError("")
    e.preventDefault();
    try {
      const token = await getCookie("tokenPass", {
        path: "/",
      });
      
      const otp = OTP.join("");
      if (otp.length != 6) {
        return alert("OTP invalido");
      }
      const request = await fetch(`${baseUrl}/recovery-pass`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ OTP }),
      });
      if (request.status === 200) {
        const response = await request.json();
        setNextStep(true);
        return;
      }
      if (request.status === 404) {
        const response = await request.json();
        setError(response.message);
        return;
      }
    } catch (error) {
      console.log("Error");
    }

    return;
  };
  const handleSendNewCod = async (e)=>{
  
      
      e.preventDefault();
      try {
       
        const sendRequest = await fetch("http://localhost:443/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
             
          },
          body:JSON.stringify({email})
         
        });
        if (sendRequest.status === 404) {
          const response = await sendRequest.json();
          setError(response.message);
          return;
        }
  
        if (sendRequest.status === 200) {
          const response = await sendRequest.json();
          setSHowCOd(false)
          setHideTimer(true)
          setSeconds(120)
         
          return;
        }
      } catch (error) {
        console.log(error);
      }
   
    
  }
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-full flex flex-col items-center justify-center">
        <img src="/logo.png" alt="Logo" className="max-w-[160px] h-16" />
        <h1 className="w-full text-center font-bold text-1xl tracking-[18px] uppercase">
          Magazine
        </h1>
      </div>
      <p>Enviado para {email}</p>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 flex flex-col items-center justify-center px-2"
      >
        <div className={`w-full md:w-1/2 grid grid-cols-6 gap-1 mx-auto mt-8`}>
          {Array.from({ length }, (_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={OTP[index]}
              onChange={(e) => handleTextChange(e.target.value, index)}
              ref={(ref) => (inputRef.current[index] = ref)}
              className={`border border-solid border-border-slate-500 focus:border-blue-600 p-5 outline-none`}
              style={{ marginRight: index === length - 1 ? "0" : "5px" }}
            />
          ))}
        </div>
        <div className="w-1/2 flex items-center justify-start gap-1 py-2">
            { hideTimer && <p className="text-[#14b7a1]">{cronometroTimer(seconds)}</p>}
            {showCod &&    <p onClick={handleSendNewCod} className="text-[#14b7a1] cursor-pointer">Reinviar o Código</p>}
          

          </div>
        {error && <p className="text-red-600 my-2">OTP inválido ou expirado!</p>}
        <button className="px-4 py-2 bg-[#14b7a1] w-1/2 text-white mt-4">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default OTPInput;

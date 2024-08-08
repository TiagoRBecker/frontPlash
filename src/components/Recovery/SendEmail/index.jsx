"use client";

import { useState } from "react";
import { setCookie } from "cookies-next";

const SendEmail = ({ setNextStep }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const recovery = async (e) => {
    setError("");
    e.preventDefault();
    try {
      const sendRequest = await fetch("http://localhost:443/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (sendRequest.status === 404) {
        const response = await sendRequest.json();
        setError(response.message);
        return;
      }

      if (sendRequest.status === 200) {
        const response = await sendRequest.json();
        setCookie("tokenPass", response.token, {
          path: "/",
          maxAge: 86400,
        });
        setCookie("email", response.user, {
          path: "/",
          maxAge: 86400,
        });
        setNextStep(true);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-full flex flex-col items-center justify-center">
        <img src="/logo.png" alt="Logo" className="max-w-[160px] h-16" />
        <h1 className="w-full text-center font-bold text-1xl tracking-[18px] uppercase">
          Magazine
        </h1>
      </div>

      <form
        className="w-full md:w-1/2 mx-auto flex flex-col items-center justify-center px-4 mt-8"
        onSubmit={recovery}
      >
        <label
          htmlFor=""
          className="w-full md:w-1/2 mb-1 text-left uppercase text-gray-400"
        >
          Insira o email cadastrado no sistema!
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          className="w-full md:pl-4 md:w-1/2 mx-auto h-11 border-[1px] border-gray-400  rounded-sm outline-none pl-4"
        />
        {error && <p className="text-red-600 text-center">{error}</p>}
        <button className="px-4 py-2 bg-[#14b7a1] w-1/2 text-white mt-4">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default SendEmail;

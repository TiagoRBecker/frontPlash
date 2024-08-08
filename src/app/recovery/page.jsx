"use client";

import OTPInput from "../../components/Recovery/OTP";
import SendEmail from "../../components/Recovery/SendEmail";
import ResetPass from "../../components/Recovery/ResetPass";
import { useState } from "react";
import Link from "next/link";

const recoveryPass = () => {
  const [nextStep, setNextStep] = useState(0);
  const handleNextStep = () => {
    setNextStep((prevStep) => prevStep + 1);
  };

  return (
    <section className="w-full  h-screen flex flex-col  mt-16 ">
      {nextStep === 0 && <SendEmail setNextStep={handleNextStep} />}

      {nextStep === 1 && <OTPInput length={6} setNextStep={handleNextStep} />}
      {nextStep === 2 && <ResetPass setNextStep={handleNextStep} />}
      {nextStep === 3 && (
        <div className="w-full h-full flex flex-col items-center  gap-4 mt-16">
          <div className="w-full flex flex-col items-center justify-center">
            <img src="/logo.png" alt="Logo" className="max-w-[160px] h-16" />
            <h1 className="w-full text-center font-bold text-1xl tracking-[18px] uppercase">
              Magazine
            </h1>
          </div>
          
          <h1 className="text-center">Sua senha foi alterada com sucesso! </h1>
          <Link href={"/auth/signin"}>
          <button className="w-[350px] md:px-4 py-2 bg-[#14b7a1] md:w-1/2 text-white mt-4">
           Login
        </button>
        </Link>
        </div>

      )}
    </section>
  );
};

export default recoveryPass;

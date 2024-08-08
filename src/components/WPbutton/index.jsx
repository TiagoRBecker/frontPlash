"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Whatsszapp = () => {
  return (
    <div className="fixed  bottom-24 right-6 md:bottom-4 md:right-8">
      <Link href={"https://api.whatsapp.com/send?phone=5547996694708&text=Ol%C3%A1!%20Tenho%20algumas%20d%C3%BAvidas,%20podem%20me%20ajudar?"} target="_blank">
        <div className="pulsar">
          <FaWhatsapp size={40} color="#fff" />
        </div>
      </Link>
    </div>
  );
};

export default Whatsszapp;

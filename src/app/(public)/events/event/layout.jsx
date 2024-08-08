"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function settingsLayout({ children }) {
  const path = usePathname();
  return (
    <div className="w-full h-full flex flex-col  ">
      <div className="w-full h-[350px] relative">
        <img
          src="/banner_skate.png"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <nav className="w-full max-w-[1140px]  mx-auto flex items-center   border-b-[1px] border-gray-400">
        <ul className="w-full flex flex-col gap-3  md:flex-row items-center justify-start  py-10 md:gap-10 font-semibold ">
          <li className=" flex flex-col gap-3">
            <Link
              href={"/events/event/happen"}
              className={
                path === "/events/event/happen"
                  ? "w-full    text-left flex items-center gap-1 uppercase text-[#14b7a1] px-4"
                  : "w-full text-black text-left flex items-center gap-1 uppercase px-4  "
              }
            >
              <p>Eventos Futuros</p>
            </Link>
          </li>
          <li className=" flex  flex-col gap-3">
            <Link
              href={"/events/event/happening"}
              className={
                path === "/events/event/happening"
                  ? " w-full    text-left flex items-center gap-1 uppercase text-[#14b7a1] px-4"
                  : "w-full text-black text-left flex items-center gap-1 uppercase px-4   "
              }
            >
              <p>Eventos Rolando Agora</p>
            </Link>
          </li>
          <li className=" flex  flex-col gap-3 ">
            <Link
              href={"/events/event/finished"}
              className={
                path === "/events/event/finished"
                  ? " w-full    text-left flex items-center gap-1 uppercase text-[#14b7a1] px-4"
                  : "w-full text-black text-left flex items-center gap-1 uppercase px-4   "
              }
            >
              <p>Eventos Encerrados</p>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="w-full">{children}</main>
    </div>
  );
}

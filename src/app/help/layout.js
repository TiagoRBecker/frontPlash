"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function UserLayout({ children }) {
  const path = usePathname();
  return (
    <>
      <div className="mt-14 overflow-hidden">
        <header className="w-full h-14 bg-white">
          <div className="w-[70%] flex items-center justify-start ">
            <Link href={"/"} className="w-28 h-full ">
              <img src="/logo.png" alt="Logo" className="w-full h-11" />
            </Link>
          </div>
        </header>
        <div className="w-full h-[350px] flex items-center justify-center bg-[url('/banner_skate.png')]  bg-no-repeat bg-cover bg-center ">
        
        </div>
        <nav className="w-[98%] mx-auto h-full flex items-center justify-around  py-10">
          <ul className="w-full  mx-auto flex items-center gap-10 ">
            <div className="w-full grid grid-cols-1 md:grid md:grid-cols-10 gap-1">
            <Link
                href={"/help/about"}
                className={
                  path === "/help/about"
                    ? "bg-[#ccc] w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                    : "bg-white w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                }
              >
                <li>Sobre</li>
              </Link>
              <Link
                href={"/help/payments"}
                className={
                  path === "/help/payments"
                    ? "bg-[#ccc] w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                    : "bg-white w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                }
              >
                <li>Pagamentos</li>
              </Link>

              <Link
                href={"/help/profitDivision"}
                className={
                  path === "/help/profitDivision"
                    ? "bg-[#ccc] w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                    : "bg-white w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                }
              >
                <li>Divisão de Lucro</li>
              </Link>

              <Link
                href={"/help/freight"}
                className={
                  path === "/help/freight"
                    ? "bg-[#ccc] w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                    : "bg-white w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                }
              >
                <li className=" ">Entregas e Fretes</li>
              </Link>
              
              <Link
                href={"/help/privacy"}
                className={
                  path === "/help/privacy"
                    ? "bg-[#ccc] w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                    : "bg-white w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                }
              >
                <li>Política de Privacidade</li>
              </Link>
              <Link
                href={"/help/work"}
                className={
                  path === "/help/work"
                    ? "bg-[#ccc] w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                    : "bg-white w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                }
              >
                <li>Ajuda</li>
              </Link>
              <Link
                href={"/help/imprensa"}
                className={
                  path === "/help/imprensa"
                    ? "bg-[#ccc] w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                    : "bg-white w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                }
              >
                <li>Imprensa</li>
              </Link>
             
              <Link
                href={"/help/publishers"}
                className={
                  path === "/help/publishers"
                    ? "bg-[#ccc] w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                    : "bg-white w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                }
              >
                <li>Negócios</li>
              </Link>
              <Link
                href={"/help/partners"}
                className={
                  path === "/help/partners"
                    ? "bg-[#ccc] w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                    : "bg-white w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                }
              >
                <li>Anuncie</li>
              </Link>
              <Link
                href={"/help/lifetime"}
                className={
                  path === "/help/lifetime"
                    ? "bg-[#ccc] w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                    : "bg-white w-full flex items-center justify-center py-5 px-2 border-[2px] border-[#14b7a1]"
                }
              >
                <li>vitalício</li>
              </Link>
            </div>
          </ul>
        </nav>
      </div>
      <main className="mt-16">{children}</main>
    <Footer/>
    </>
  );
}

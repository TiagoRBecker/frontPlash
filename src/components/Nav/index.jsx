"use client";
import Link from "next/link";
import {  useContext, useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { ApiHook, baseUrl } from "../../utils/api.jsx";
import { CartContext } from "../../Context";
import { useRouter } from "next/navigation.js";
import { deleteCookie } from "@/utils/cookies.js";

const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { cart } = useContext(CartContext);
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showUser, setShowUser] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [categories, setCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(false);
  const cls = visible ? "visible_menu" : "hidden_menu";
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const viewWidth = window.innerWidth;
      if (viewWidth > 770) setShowMenuMobile(false);
    };

    const handleScroll = () => {
      // Verifica se o menu mobile está aberto, se sim, retorna sem fazer nada
      if (showMenuMobile) {
        return;
      }

      let moving = window.scrollY;
      if (showUser) {
        setShowUser(false);
      }
      if (openCategory) {
        setOpenCategory(false);
      }
      setVisible(position > moving);
      setPosition(moving);
    };

    // Adiciona ou remove a classe dependendo do estado showMenuMobile
    if (showMenuMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Adiciona o listener de scroll
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    // Remove o listener e a classe quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("resize", handleResize);
    };
  }, [position, showUser, showMenuMobile, openCategory]);

  const showMenu = () => {
    setShowUser(!showUser);
    setOpenCategory(false);
  };
  const handleMenuMobile = () => {
    setShowMenuMobile(!showMenuMobile);
  };
  const handleSignOut = async () => {
    await signOut({ redirect: false }); // Não redireciona automaticamente
    await deleteCookie()
    router.push('/'); // Redireciona manualmente para a página de login
    return
  };
  const getCategories = async () => {
    setLoading(true)
    try {
      const response = await ApiHook.catgories();
      setCategories(response);
      return;
    } catch (error) {
      console.log(error);
      router.push("/error");
      return;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  const handleOpenCategory = () => {
    setOpenCategory(!openCategory);
  };
  const handleCloseMenus = () => {
    setOpenCategory(false);
    setShowUser(false);
  };

  return (
    <header className={cls}>
      <div className="w-[30%] px-4 justify-start md:w-[30%]  h-full flex items-center md:justify-center gap-4">
        <Link
          href={"/"}
          className="w-full md:w-[30%] h-full flex items-center justify-center"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-12 md:w-26 md:h-12 "
            onClick={handleCloseMenus}
          />
        </Link>
      </div>

      <nav className="hidden md:w-[40%] h-full md:flex items-center justify-center text-black relative">
        <ul className=" flex  items-center gap-10 uppercase">
          <li className=" cursor-pointer relative" onClick={handleOpenCategory}>
            <div className="flex gap-2 items-center">
              <p className="">Revistas</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </li>
          <li>
            <Link href={"/explore/free"} onClick={handleCloseMenus}>
              Explorar
            </Link>
          </li>
          <li>
            <Link href={"/library/magazine"} onClick={handleCloseMenus}>
              Biblioteca
            </Link>
          </li>
          <li>
            <Link href={"/events/event/happening"} onClick={handleCloseMenus}>
              Eventos
            </Link>
          </li>
        </ul>
        <div className={openCategory ? "block" : "hidden"}>
          <div className="absolute right-0 bottom-0 left-0  top-[60px] bg-white w-full h-[80vh] py-4 px-4 ">
            <h1 className=" py-4 uppercase border-b-[1px] border-gray-400">
              Categorias
            </h1>
            {loading ? (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-400 text-xl">Carregando</p>
              </div>
            ) : (
              <div className="flex gap-3 items-center flex-wrap px-4 py-2">
                {categories.map((name, index) => (
                  <Link
                    href={`/categorias/${name.id}`}
                    onClick={handleCloseMenus}
                    key={index}
                  >
                    <p className="text-gray-500 hover:text-[#14b7a1] cursor-pointer">
                      {name.name}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="w-[80%] flex items-center justify-end px-4 md:hidden">
        <div className="w-[70%]  gap-5 flex items-center justify-end md:hidden">
          <div className="cursor-pointer transiton duration-150  relative">
            <Link href={"/cart"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              {cart.length > 0 && (
                <p className="absolute bottom-0 right-0 w-[14px] h-[14px] rounded-full bg-[#14b7a1] text-white flex items-center justify-center text-xs">
                  {cart.length}
                </p>
              )}
            </Link>
          </div>
          {status === "loading" && (
            <div className="cursor-pointer transiton duration-150 flex items-center gap-1">
              <p className="text-sm text-gray-300">carregando</p>
            </div>
          )}
          {status === "authenticated" && (
            <>
              <div
                className="cursor-pointer transiton duration-150 flex items-center gap-1"
                onClick={showMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <p className="truncate">{session?.user?.name}</p>
              </div>
              <div
                className={
                  showUser
                    ? "flex flex-col gap-9 w-[300px] h-[400px] bg-white rounded-sm absolute top-11 right-3  z-50 px-4 py-2"
                    : "hidden"
                }
              >
                <h3 className="text-black font-bold  py-2">Perfil Usuário</h3>

                <Link
                  href={"/account-settings/settings/edit-perfil"}
                  onClick={() => setShowUser(false)}
                >
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                    <p>Conta</p>
                  </div>
                </Link>
                <Link
                  href={"/account-settings/favorites"}
                  onClick={() => setShowUser(false)}
                >
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    <p>Favoritos</p>
                  </div>
                </Link>
                <Link
                  href={"/account-settings/requests"}
                  onClick={() => setShowUser(false)}
                >
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                      />
                    </svg>
                    <p>Pedidos</p>
                  </div>
                </Link>
                <div
                  className=" flex gap-2 items-center"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                  </svg>
                  <p> Sair</p>
                </div>
              </div>
            </>
          )}
          {status === "unauthenticated" && (
            <div className="cursor-pointer transiton duration-150 flex items-center gap-1">
              <Link href={"/auth/signin"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
        {/**
        <div className={showMenuMobile ? "showMenu " : "hiddeMenu"}>
          <nav className="w-full h-full">
            <ul className="flex gap-6 flex-col ">
              <div className="w-full flex items-center justify-between">
                <Link
                  href={"/"}
                  className="w-full h-full flex items-center justify-start "
                >
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className=" w-32 h-12 object-fill"
                  />
                </Link>
                <p
                  onClick={() => setShowMenuMobile(false)}
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </p>
              </div>
              <li>
                <Accordion allowMultiple    >
                  <AccordionItem className="uppercase"  border={"none"}>
                   
                      <AccordionButton className="uppercase "  bg={"transparent"}>
                      
                          
                          Revistas
                        
                        <AccordionIcon />
                      </AccordionButton >
                      {categories.map((item, index) => (
                        <AccordionPanel key={index}  >
                          <Link href={`/categorias/${item.id}`} onClick={()=>setShowMenuMobile(false)}>
                          {item.name}
                          </Link>
                        </AccordionPanel>
                       
                      ))}
                  
                  </AccordionItem>
                </Accordion>
              </li>
              <li className="pl-4">
                <Link
                  href={"/explore/free"}
                  onClick={() => setShowMenuMobile(false)}
                >
                  Explorar
                </Link>
              </li>
              <li className="pl-4">
                <Link
                  href={"/library/magazine"}
                  onClick={() => setShowMenuMobile(false)}
                >
                  Biblioteca
                </Link>
              </li>
             
            </ul>
          </nav>
        </div>


        <div
          className="w-[10%] h-full flex items-center justify-end   cursor-pointer md:hidden"
          onClick={handleMenuMobile}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
        */}
      </div>

      <div className=" hidden md:flex items-center justify-center gap-10 w-[30%]  relative">
        <div className="cursor-pointer transiton duration-150  relative">
          <Link href={"/cart"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {cart.length > 0 && (
              <p className="absolute bottom-0 right-0 w-[14px] h-[14px] rounded-full bg-[#14b7a1] text-white flex items-center justify-center text-xs">
                {cart.length}
              </p>
            )}
          </Link>
        </div>
        {status === "loading" && (
          <div className="cursor-pointer transiton duration-150 flex items-center gap-1">
            <p className="text-sm text-gray-300">carregando</p>
          </div>
        )}
        {status === "authenticated" && (
          <>
            <div
              className="cursor-pointer transiton duration-150 flex items-center gap-1"
              onClick={showMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <p className="truncate">{session?.user?.name}</p>
            </div>
            <div
              className={
                showUser
                  ? "flex flex-col gap-9 w-[300px] h-[400px] bg-white rounded-sm absolute top-11 right-3  z-50 px-4 py-2"
                  : "hidden"
              }
            >
              <h3 className="text-black font-bold  py-2">Perfil Usuário</h3>

              <Link
                href={"/account-settings/settings/edit-perfil"}
                onClick={() => setShowUser(false)}
              >
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <p>Conta</p>
                </div>
              </Link>
              <Link
                href={"/account-settings/favorites"}
                onClick={() => setShowUser(false)}
              >
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <p>Favoritos</p>
                </div>
              </Link>
              <Link
                href={"/account-settings/requests"}
                onClick={() => setShowUser(false)}
              >
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                  <p>Pedidos</p>
                </div>
              </Link>
              <div
                className=" flex gap-2 items-center cursor-pointer"
                onClick={handleSignOut}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
                <p> Sair</p>
              </div>
            </div>
          </>
        )}
        {status === "unauthenticated" && (
          <div className="cursor-pointer transiton duration-150 flex items-center gap-1">
            <Link href={"/auth/signin"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

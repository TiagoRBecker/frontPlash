"use client";
import Link from "next/link";
import { baseUrl } from "../../../../utils/api";
import { useEffect, useState } from "react";
import { createCookies } from "../../../../utils/cookies";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Loading from "../../../loading";

const Library = () => {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      getAllBooks();
    }

    // Limpeza do efeito
  }, [session, status]);

  const path = usePathname();
  const router = useRouter();
  const [name, setName] = useState("");
  const [getBooks, setGetBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [orderBy, setOrderBy] = useState("");
  const getAllBooks = async () => {
    const token = session?.user.accessToken;

    const getBooks = await fetch(`${baseUrl}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    });
    const response = await getBooks.json();

    setGetBooks(response.articlesByUser);
    setLoading(false);
    return;
  };

  const handleSearchName = async () => {
    const id = session?.user.id;

    const getBooks = await fetch(
      `${baseUrl}/library/${id}?name=${name}&orderBy=${orderBy}`,
      {
        method: "GET",
      }
    );
    const response = await getBooks.json();
    setGetBooks(response);
    setLoading(false);
    return;
  };
  if (loading) {
    return (
      <section className="w-full h-screen">
        <Loading />
      </section>
    );
  }

  return (
    <section className="max-w-[1240px] mx-auto min-h-screen py-10 mt-14 ">
      <nav className="gap-2 w-full flex items-center justify-center">
        <ul className="flex w-full gap-4 items-center justify-center text-xl ">
          <li
            className={
              path === "/library/magazine"
                ? "text-[#14b7a1] border-b-2 border-[#14b7a1]"
                : "text-black border-b-2 border-transparent"
            }
          >
            <Link href={"/library/magazine"}>Revistas</Link>
          </li>
          <li
            className={
              path === "/library/articles"
                ? "text-[#14b7a1] border-b-2 border-[#14b7a1]"
                : "text-black border-b-2 border-transparent"
            }
          >
            <Link href={"/library/articles"}>Artigos</Link>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col md:flex-row w-full items-center justify-around pt-10 gap-3 px-5">
        <div className="w-full md:flex flex-col items-center justify-center md:w-[30%]">
          <label className="text-lg text-left w-full text-gray-400">
            Ordernar:
          </label>
          <select className="w-full outline-none border-[1px] border-r-gray-400 h-8 rounded-md">
            <option value="">Selecionar Categoria</option>
            <option value="">Revistas</option>
            <option value="">Artigos</option>
          </select>
        </div>

        <div className="w-full md:flex flex-col items-center justify-center md:w-[30%]">
          <label className="text-lg text-left w-full text-gray-400">Nome</label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Buscar por nome"
            className="outline-none pl-4 h-8 rounded-md border-[1px] border-gray-300 w-full"
          />
        </div>
        <div className="w-full md:flex flex-col items-center justify-center md:w-[30%]">
          <label className="text-lg text-left w-full text-gray-400">
            Ordernar:
          </label>
          <select
            className="w-full outline-none border-[1px] border-r-gray-400 h-8 rounded-md"
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
          >
            <option value="">Selecionar Ordem</option>
            <option value="asc">Ultímas adicionada</option>
            <option value="desc">Primeiras Adicionada</option>
          </select>
        </div>
        <div className="w-full md:w-[10%] h-full ">
          <button
            onClick={handleSearchName}
            className="w-full bg-[#14b7a1] text-white py-2 font-bold text-lg flex items-center justify-center mt-4"
          >
            Filtrar
          </button>
        </div>
      </div>

      <div className="w-full h-full px-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5">
        {getBooks?.map((book, index) => (
          <div
            className="w-full h-full flex flex-col  shadow-md   rounded-md my-4 "
            key={index}
          >
            <div className="w-full h-full  flex items-center justify-center ">
              <img
                src={book?.cover}
                alt={book.name}
                className="w-full h-[250px]   object-cover "
              />
            </div>

            <h1 className="w-full font-bold text-lg truncate text-black py-1 uppercase">
              {book.name}
            </h1>

            <div className="w-full flex items-center justify-center pt-2 bg-[#14b7a1] ">
              <Link href={`/readBook/read_article/${book.id}`}>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                  </svg>
                  <p className="text-lg text-white truncate ">Ler Artigo</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Library;

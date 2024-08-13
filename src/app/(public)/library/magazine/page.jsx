"use client";
import Link from "next/link";
import { ApiHook } from "../../../../utils/api.jsx";
import { useEffect, useState } from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Loading from "../../../loading";
import GridLayout from "@/components/Grid";
import Filter from "@/components/Filter";

const Library = () => {
  const path = usePathname();
  const router = useRouter();
   const {data:session} = useSession()
  const [name, setName] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    
      getAllBooks();
    
    

    // Limpeza do efeito
  }, [session]);

  const [orderBy, setOrderBy] = useState("");
  const getAllBooks = async () => {
    try {
      const response = await ApiHook.userLibrary();

      setBooks(response);
      return;
    } catch (error) {
      console.log(error);
      router.push("/error");

      return;
    } finally {
      setLoading(false);
    }
  };
  if(!session){
    return redirect('/auth/signin')
  }
  if (loading) {
    return (
      <section className="w-full h-screen">
        <Loading />
      </section>
    );
  }

  return (
    <section className="container mx-auto min-h-screen  mt-16">
   
        <div>
          {" "}
          <nav className="gap-2 w-full flex items-center justify-center">
            <ul className="flex w-full gap-4 items-center justify-center text-2xl uppercase ">
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
          <div className="w-full flex flex-col gap-3 md:flex-row h-full mt-10">
            <div className="w-full md:w-[450px] ">
              <Filter
                books={books}
                setBooks={setBooks}
                loading={loading}
                setLoading={setLoading}
              />
            </div>

            <div className="flex-grow h-full">
              {books?.length > 0 ? (
                <GridLayout>
                  {books?.map((book, index) => (
                    <div
                      key={index}
                      className="max-w-[200px]  h-full flex flex-col items-center justify-center shadow transition ease-in-out delay-150"
                    >
                      <div className="w-full h-full  flex items-center justify-center ">
                        <img
                          src={book.cover}
                          alt={book.name}
                          className="w-full h-[190px] md:h-[270px] object-fill"
                        />
                      </div>

                      <h1 className="w-full font-bold text-lg truncate text-black py-1 uppercase">
                        {book.name}
                      </h1>
                      <span className="w-full  truncate text-black py-1 ">
                        {book.subCategory}
                      </span>

                      <div className="w-full flex items-center justify-center pt-2 bg-[#14b7a1] ">
                        <Link href={`/readBook/${book.id}`}>
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
                            <p className="text-lg text-white">Ler Revista</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </GridLayout>
              ) : (
                <div className="flex-grow flex items-center justify-center h-full ">
                  <p className="w-full text-gray-300 text-center ">
                    Nenhum item adicionado a biblioteca!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
   
    </section>
  );
};

export default Library;

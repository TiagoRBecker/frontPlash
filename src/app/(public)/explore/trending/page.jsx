"use client"
import ArticleNav from "../../../../components/NavArticle";
import { readingTime } from "reading-time-estimator";
import { baseUrl } from "../../../../utils/api";
import Link from "next/link";
import Loading from "../../../loading";
import { useEffect,useState,useContext } from "react";
import { CartContext } from "@/Context";

const trend = async () => {

 
  useEffect(()=>{getArticlesTrend()},[])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const {
    handleArticleFavorite,
    articlesFavorites,
  } = useContext(CartContext);

  const articleIdFavorite = articlesFavorites.map((item) => item.id);
  const verifyIdSave = data.map((id) =>
    articleIdFavorite.includes(id.id)
  );
  const reading = (text) => {
    const read = readingTime(text, 20, "pt-br");
    return read.minutes;
  };
  const getArticlesTrend = async () => {
    const getArticle = await fetch(`${baseUrl}/articles-trend`, {
      method: "GET",
      cache: "no-cache",
    });
    const response = await getArticle.json();
  setData(response)
  setLoading(false)
    return response;
  };
 
 
  
   if(loading){
     return(
       <div className="w-full h-screen flex items-center justify-center">
         <Loading/>
       </div>
     )
   }
  return (

    <section className="container mx-auto min-h-screen py-10">
        <ArticleNav />
        {data.length > 0 ? (
          <div className="w-[78%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 gap-6">
            {data.map((book, index) => (
              <div
                className="w-full h-full flex flex-col  shadow-md  py-2 rounded-md "
                key={index}
              >
                <Link href={`/read-article-free/${book.id}`}>
                  <img
                    src={book.cover}
                    alt={book.name}
                    className="w-full object-cover min-h-[280px] max-h-[280px] "
                  />
                  <div className="px-1 py-1">
                    <h2 className="text-black pt-1 ">
                      <span className="text-[#14b7a1]">{book.company} </span>|
                      Volume {book.volume}
                    </h2>

                    <h1 className="w-full font-bold text-lg truncate text-black pt-1 uppercase">
                      {book.name}
                    </h1>
                  </div>
                  </Link>
                  <div className="px-1 py-1 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>

                      <p className="tex-base text-gray-400">{book.views}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <p className="tex-base text-gray-400">
                        {reading(book.description)} min
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                        />
                      </svg>
                      {verifyIdSave[index] ? (
                          <p className="text-base text-blue-300 ">Salvo</p>
                        ) : (
                          <p
                            onClick={() => handleArticleFavorite(book)}
                            className="text-base text-gray-400 cursor-pointer"
                          >
                            Guardar
                          </p>
                  )}
                    </div>
                  </div>
               
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-screen flex items-center justify-center">
            <p className="text-gray-400 text-lg">Nenhum arquivo no momento</p>
          </div>
        )}
      </section>
  
  );
};

export default trend;

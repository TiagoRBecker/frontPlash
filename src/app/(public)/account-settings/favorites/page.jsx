"use client";
import { useEffect, useState, useContext } from "react";

import Link from "next/link";
import { CartContext } from "../../../../Context";
const Favorites = () => {
  const { clearFavorite, favorite,articlesFavorites } = useContext(CartContext);
  
  return (
    <section className="w-full h-full py-10 flex flex-col items-center justify-center">
      
      { favorite && favorite.length > 0 && 
        <div className="max-w-[1040px] h-full mx-auto py-10">
           <div className="w-full flex items-center justify-end px-8">
            <button
              className="px-4 py-2 bg-red-500 rounded-md"
              onClick={clearFavorite}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
            <h1 className="text-left text-lg px-8">Revistas Salvas</h1>
         
          <div className="w-full h-full grid grid-cols-2 gap-5  px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5">
            {favorite?.map((book, index) => (
              <Link href={`/magazine/${book?.id}`}>
                <div
                  className="w-full  flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]   rounded-md"
                  key={index}
                >
                  <img
                    src={book?.cover}
                    alt={book?.name}
                    className="w-full h-[240px] object-fill "
                  />
                  <div className="px-4">
                    <span className="font-bold py-2">
                      Editora {book?.company}
                    </span>
                    <h2 className="text-gray-400 pt-1 ">
                      Volume {book?.volume}
                    </h2>

                    <p className="w-full text-base truncate text-gray-600 pt-2">
                      {book?.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        </div>
      
      }
      { articlesFavorites && articlesFavorites.length > 0 && (
        
        
        <div className="max-w-[1040px] h-full mx-auto py-10">
           <div className="w-full flex items-center justify-end px-8">
            <button
              className="px-4 py-2 bg-red-500 rounded-md"
              onClick={clearFavorite}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        <h1 className="text-left text-lg px-8">Artigos Salvos</h1>
        <div className="w-full h-full grid grid-cols-2 gap-5  px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5">
            {articlesFavorites?.map((book, index) => (
              <Link href={`/read-article-free/${book.id}`}>
                <div
                  className="w-full  flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]   rounded-md"
                  key={index}
                >
                  <img
                    src={book?.cover}
                    alt={book?.name}
                    className="w-full h-[240px] object-cover "
                  />
                  <div className="px-4">
                    <span className="font-bold py-2">
                      Editora {book?.company}
                    </span>
                    <h2 className="text-gray-400 pt-1 ">
                      Volume {book?.volume}
                    </h2>

                    <p className="w-full text-base truncate text-gray-600 pt-2">
                      {book?.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        </div>
        
      ) 
      }
      {articlesFavorites.length === 0 && favorite.length === 0 && <div className="w-full flex items-center justify-center h-screen">
        <p className="text-gray-500">Nenhum item adicionado aos favoritos</p>
        </div>}
    </section>
  );
};

export default Favorites;

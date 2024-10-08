"use client"

import Wrapper from "@/app/wrapper";
import Link from "next/link";


const ReadArticle = ({data,content}) => {
 
    return ( 
   
      <div className="w-full flex flex-col md:flex md:flex-row gap-2 ">
      {data.status === "free" ?
      <div
       className="w-[90%]"
      >
        <h1>{data.name}</h1>

        <div
          className="w-full h-full"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        
      </div>
      :
      <div
      className="w-[90%]"
     >
       <h1>{data.name}</h1>

       <div
         className="relative  fade-out"
         dangerouslySetInnerHTML={{ __html: content }}
       />
       <div className="w-full flex items-center justify-center flex-col mt-10">
         <Link href={`/magazine/${data.magazine?.id}`} className="w-14 h-14 bg-gray-500 flex items-center justify-center rounded-full">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth={1.5}
             stroke="currentColor"
             className="size-8 text-white"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
             />
           </svg>
         </Link>
         <p>Libere esse artigo e outros na compra da revista!</p>
       </div>
     </div>

}
      <Wrapper>
        <img
          src={data.magazine?.cover}
          alt={data.magazine?.name}
          className="w-full md:w-[50%] h-[300px] object-fill"
        />
        <p className="pt-1 text-gray-500">{data.magazine?.name}</p>
        <Link href={`/magazine/${data.magazine?.id}`}>
          <button className="w-full bg-[#14b7a1] border-[1px]  px-10 py-2 text-white rounded-md uppercase text-sm">
            Visitar Revista
          </button>
        </Link>
      </Wrapper>
    </div>
   
    
     
     );
} 
 
export default ReadArticle;


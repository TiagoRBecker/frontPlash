import { baseUrl } from "../../utils/api";
import Link from "next/link";
import Carrousel from "../CarrouselComponent";
import GridLayout from "../Grid";
const getSpsonsors = async ()=>{
    const sponsors = await fetch(`${baseUrl}/sponsors`,{method:"GET",cache:"no-cache"})
    const response = await sponsors.json()
    return response
}


const LastMagazines = async () => {
  const data = await getSpsonsors();
  
  return (
    <section className="container h-full mx-auto ">
      <div className="w-full ">
    
      
       
        <div className='w-full  grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-5 '>
          {data?.map((magazine, index) => (
         
           
              <Link href={magazine.url} target="_blank" className="w-full h-full ">
               <img
                 src={magazine.cover}
                 alt={magazine.name}
                className="w-[150px] h-[150px] object-contain "
               />
               
            
             </Link>
          
          ))}
          </div>
          
     
      </div>
    </section>
  );
};

export default LastMagazines;
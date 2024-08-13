import Link from "next/link";
import { readingTime } from "reading-time-estimator";
import { ApiHook} from "../../utils/api";
import Carrousel from "../CarrouselComponent";
import { settingsArticlesCarroousel } from "@/utils/settingsCarrousel";
import Image from "next/image";

const getArticlesRecommended = async () => {
  try {
    const response = await ApiHook.articlesRecommended();

    return response;
  } catch (error) {
    console.log(error);
  }
};
const Recommended = async () => {
  const data = await getArticlesRecommended();

  const reading = (text) => {
    const read = readingTime(text, 350, "pt-br");
    return read.minutes;
  };

  return (
    <section className="container mx-auto h-full">
      {data && data.length > 0 && (
        <div className="w-full h-full mx-auto">
          <div className="w-full px-3">
            <h1 className="text-xl font-bold py-4">Artigos Recomendados</h1>
          </div>

          <Carrousel settings={settingsArticlesCarroousel} className="mb-10 ">
            {data?.map((magazine, index) => (
              <div
                key={index}
                className="w-full relative h-full flex items-center justify-center shadow transition ease-in-out delay-150 "
              >
                <Link
                  href={`/read-article-free/${magazine.id}`}
                  className="w-full h-full flex items-center justify-center flex-col p-1"
                >
                  <div className="w-full flex items-center justify-between gap-2 ">
                    <h1 className="w-full text-black font-semibold truncate">
                      {magazine.name}
                    </h1>
                    <button className="w-[28%] h-6 rounded-md text-white bg-[#14b7a1]   text-[10px] ">
                      Recomendado
                    </button>
                  </div>
                  <div className="w-full mt-2 flex items-center gap-2 h-[164px] ">
                    <div className="w-[70%] h-full text-ellipsis overflow-hidden ">
                      <p className="w-full h-[164px] text-justify text-ellipsis overflow-hidden">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quod ratione, dolore odio ea ipsam pariatur
                        molestiae adipisci accusamus, neque, sequi hic numquam
                        corrupti aliquid excepturi nam voluptate sed dolor sunt.
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quod ratione, dolore odio ea ipsam pariatur
                        molestiae adipisci accusamus, neque, sequi hic numquam
                        corrupti aliquid excepturi nam voluptate sed dolor sunt.
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quod ratione, dolore odio ea ipsam pariatur
                        molestiae adipisci accusamus, neque, sequi hic numquam
                        corrupti aliquid excepturi nam voluptate sed dolor sunt.
                      </p>
                    </div>
                    <div className="w-[30%] h-full flex items-center justify-center ">
                      <Image src={magazine?.cover} alt={magazine.name} 
                      quality={100}
                      width={150}
                      height={150}
                      style={{
                        objectFit: 'cover', // cover, contain, none
                        width:'100%',
                        height:'100%'
          }} />
                    </div>
                    <div></div>
                  </div>

                  <div className="w-full h-full px-2">
                    <div className="w-full  flex items-center justify-between ">
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

                        <p className="tex-base text-gray-400">
                          {magazine.views}
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
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        <p className="tex-base text-gray-400">
                          {reading(magazine.description)} min
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Carrousel>
        </div>
      )}
    </section>
  );
};

export default Recommended;

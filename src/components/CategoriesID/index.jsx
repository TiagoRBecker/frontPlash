import Link from "next/link";
import { ApiHook, baseUrl } from "../../utils/api";
import GridLayout from "../Grid";

const getCategories = async (id) => {
  const response = await ApiHook.categoriesID(id) 
  
  return response;
};
const CategoriesID = async ({ id }) => {
  const data = await getCategories(id);

  return (
    <section className="max-w-[1140px] mx-auto h-full px-2  mt-16">
      <div className="">
        <div className=" w-full flex items-center gap-1 py-10">
          <Link href={"/"} className="text-gray-500 text-xl hover:text-black">
            Home
          </Link>{" "}
          / <h1 className=" text-gray-500 text-xl ">{data.name}</h1>
        </div>

        {data.magazine <= 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <p className="text-gray-400">
              Nenhuma revista encontrada para esta categoria
            </p>
          </div>
        ) : (
          <GridLayout>
            {data.magazine?.map((book, index) => (
              <div
                key={index}
                className="max-w-[200px] relative h-full flex items-center justify-center shadow transition ease-in-out delay-150"
              >
                <Link href={`/magazine/${book.id}`} key={index} className="w-full h-full">
                  <div className="">
                    <button className="w-24 h-6 rounded-md text-white bg-[#14b7a1] absolute top-1 right-3 uppercase text-[12px] font-bold">
                      {book.model}
                    </button>
                  </div>
                  <img
                    src={book.cover}
                    alt={book.name}
                    className="w-full h-[190px] md:h-[270px] object-fill"
                  />
                  <h2 className="text-gray-400  px-1 ">Volume {book.volume}</h2>

                  <p className="w-full text-base truncate text-gray-600  px-1 py-2">
                    {book.name}
                  </p>

                  <p className="w-full text-base truncate text-gray-600  px-1">
                    {book.capa}
                  </p>
                </Link>
              </div>
            ))}
          </GridLayout>
        )}
      </div>
    </section>
  );
};

export default CategoriesID;

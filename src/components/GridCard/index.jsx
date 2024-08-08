import Link from "next/link";



const GridCardBox = ({data}) => {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-4 px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5">
            {data?.map((book, index) => (
              <Link href={`/magazine/${book.id}`} key={index}>
                <div className="w-full h-full flex flex-col gap-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]   relative">
                  <div className="">
                    <button className="w-24 h-6 rounded-md text-white bg-[#14b7a1] absolute top-1 right-3 uppercase text-[12px] font-bold">{book.model}</button>
                  </div>
                  <img
                    src={book.cover}
                    alt={book.name}
                    className="w-full h-full sm:h-[300px] object-fill "
                  />
                  <h2 className="text-gray-400  px-1 ">
                    Volume {book.volume}
                  </h2>

                  <p className="w-full text-base truncate text-gray-600  px-1 py-2">
                    {book.name}
                  </p>

                  <p className="w-full text-base truncate text-gray-600  px-1">
                    {book.capa}
                  </p>
                </div>
              </Link>
            ))}
         </div>
  );
};

export default GridCardBox;

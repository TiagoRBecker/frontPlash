import Link from "next/link";
import { readingTime } from "reading-time-estimator";
import { baseUrl } from "../../utils/api";

const getArticlesRecommended = async () => {
    const getArticle = await fetch(`${baseUrl}/articles-most-views`, {
      method: "GET",
      cache:"no-cache"
    });
    const response = await getArticle.json();
  
    return response
  };
const MostViews = async () => {
  const data = await getArticlesRecommended();

  const reading = (text) => {
    const read = readingTime(text, 20, "pt-br");
    return read.minutes;
  };

  return (
    <section className="w-full mx-auto h-full">
      {
        data && data.lengh > 0 &&
      
      <div className="w-fullh-full mx-auto">
      <h1 className="text-xl font-bold py-4">Artigos Mais Visualizados</h1>
        <div className="w-full h-full grid grid-cols-2 gap-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5">
          {data.map((book, index) => (
            <div
              className="w-full h-full flex flex-col  shadow-md  py-2 rounded-md "
              key={index}
            >
              <Link href={`/read-article-free/${book.id}`}>
                <img
                  src={book.cover}
                  alt={book.name}
                  className="max-w-[200px] h-[270px] object-fill "
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

                <div className="px-1 py-1 flex items-center gap-4">
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
                
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
}
    </section>
  );
};

export default MostViews;

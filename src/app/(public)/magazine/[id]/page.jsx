"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CartContext } from "../../../../Context/index";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApiHook, baseUrl } from "../../../../utils/api";
import { readingTime } from "reading-time-estimator";
import Loading from "../../../loading";
import WayPoint from "../../../../components/WayPoint";
import { useRouter } from "next/navigation";
import Carrousel from "@/components/CarrouselComponent";
import {
  settingsArticlesCarroousel,
  settingsMagazineCarrousel,
} from "@/utils/settingsCarrousel";

const BookId = ({ params }) => {
  const router = useRouter();
  const {
    handleAddFav,
    handleArticleFavorite,
    cart,
    addToCart,
    removeToCart,
    articlesFavorites,
  } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [categoriesMagazine, setCategoriesMagazine] = useState();
  useEffect(() => {
    getmagazineId();
  }, []);
  const reading = (text) => {
    const result = readingTime(text, 10, "pt-br");
    return result.minutes;
  };
  const getmagazineId = async () => {
    try {
      const response = await ApiHook.magazinesID(params.id);
      const categories = await ApiHook.categoriesID(response.Category.id);

      setCategoriesMagazine(categories.magazine);
      setData(response);
      setLoading(false);
      return;
    } catch (error) {
      console.error("Error fetching magazine:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleShowModal = (magazine) => {
    setShowModal(!showModal);
    addToCart(magazine);

    return;
  };
  const handleToCart = (magazine) => {
    addToCart(magazine);
    router.push("/cart");
    return;
  };

  
  const statusArticle = (status) => {
    console.log(status)
    switch (status) {
      case "recommended":
        return (<p>Recomendado</p>)
        break;
      case "free":
        return <p>Gratuito</p>;
        break;
      case "trend":
        return <p>Tendencias</p>;
        break;
      default:
        return <p></p>;
    }
  };

  const total =
    cart?.reduce((acc, currentValue) => acc + currentValue.price, 0) || 0;
  if (loading) {
    return (
      <section className="w-full h-screen">
        <Loading />
      </section>
    );
  }
  const filterMagazines = categoriesMagazine.filter(
    (magazine) => magazine.id != Number(data.id)
  );

  const articleIdFavorite = articlesFavorites.map((item) => item.id);
  const verifyIdSave = data.article.map((id) =>
    articleIdFavorite.includes(id.id)
  );

  return (
    <section className="container mx-auto min-h-screen h-full mt-16  ">
      <WayPoint
        url={`/categorias/${categoriesMagazine.id}`}
        nameCategory={data.Category.name}
        name={data?.name}
      />

      {/*Modal*/}
      <div
        className={`${
          showModal
            ? "w-full  h-screen fixed bg-black bg-opacity-45 z-50  top-0 left-0 right-0 bottom-0 flex justify-center py-10 "
            : "hidden"
        }`}
      >
        <div className="w-full md:w-[600px] max-h-[100vh] fixed top-16 bg-white rounded-md overflow-y-auto">
          <p
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </p>
          <h1 className="py-4 text-xl px-4 text-center text-gray-400">
            Total de item no carrinho{" "}
            <span className="text-[#14b7a1]">{cart.length}</span>
          </h1>
          <div className=" flex items-center justify-center flex-col gap-2  ">
            <div className="w-full h-[300px] border-b-2 border-[#14b7a1]   overflow-auto">
              {cart.map((book, index) => (
                <div
                  className="flex border-b-2 border-gray-200 py-5 px-4 "
                  key={index}
                >
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex gap-2">
                      <div className="w-[30%]">
                        <img
                          src={book.cover}
                          alt={book.name}
                          className="w-20 h-20"
                        />
                      </div>
                      <div className="w-[40%]   flex flex-col gap-2 px-2">
                        <p>{book.name}</p>
                        <span className="text-sm px-2 py-[1px] bg-[#14b7a1] uppercase text-white text-[12px] rounded-xl w-[80px] flex items-center justify-center">
                          Edição
                        </span>
                        <p>Volume: {book.vol}</p>
                      </div>
                      <div className="w-[40%] flex flex-col px-2  ">
                        <p
                          className=" w-full flex items-center justify-end cursor-pointer"
                          onClick={() => removeToCart(book)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-right"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </p>
                        <p className="flex items-center justify-end pt-10">
                          {book.price &&
                            Number(book.price)?.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex items-center justify-between  px-4">
              <h2 className="font-bold">Divisão de Lucro 200%</h2>
              <p className="text-base text-[#14b7a1]">
                {Number(total).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <div className="w-full flex items-center justify-between py-2 px-4">
              <h2 className="text-black font-bold">
                Total{" "}
                <span className=" font-semibold">(incluindo impostos)</span>
              </h2>
              <p className="font-bold text-[#14b7a1]">
                {Number(total).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center  px-4 py-1 gap-4">
              <button className="w-full md:w-[50%] bg-[#14b7a1] border-[1px]  px-10 py-4 text-white rounded-md uppercase text-sm  ">
                <Link href={"/cart"}>Comprar</Link>
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="w-full md:w-[50%] bg-[rgba(16,184,163,0.29)] font-bold text-[#10B8A3]  border-[1px]  px-10 py-4  rounded-md uppercase text-sm "
              >
                Continue Comprando
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*Modal*/}
      {/*Magzines*/}
      <div className="w-full flex flex-col justify-center lg:flex-row">
        <div className="w-full  md:w-[40%] h-full flex items-center justify-center    ">
          <img
            src={data?.cover}
            alt={data?.volume}
            className="w-full lg:w-[400px] h-[550px] object-fill  "
          />
        </div>
        <div className="w-full  lg:w-[60%] h-full px-5 flex flex-col gap-2 ">
          <h1 className="text-2xl text-gray-500 uppercase">{data?.name}</h1>
          <h2 className="text-gray-400 ">Edição Volume {data?.volume}</h2>
          <div className="w-full  flex items-center jus gap-2">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </p>
            <span onClick={() => handleAddFav(data)} className="cursor-pointer">
              Adiconar aos Favoritos
            </span>
          </div>
          <p className="w-full h-full text-ellipsis overflow-hidden  ">
            {data?.description}
          </p>

          <div className="w-full  flex  items-center  py-4 ">
            <button className="text-white font-bold w-32 py-1 bg-[#14b7a1]  text-base rounded-lg  uppercase">
              {data.model}
            </button>
          </div>
          <Link href={"help/profitDivision"}>
            <p className="text-[9px]">
              Saiba mais sobre os produto digital 3d Plash
            </p>
          </Link>
          <div className="w-full h-full grid-cols-1 gap-2 ">
            <div className="w-full mt-2  border-[1px] border-gray-400 py-1 px-1 ">
              <button
                onClick={() => handleToCart(data)}
                className="w-full bg-[#14b7a1] font-   border-[1px]  px-10 py-4 text-white rounded-md uppercase text-sm transition duration-700 ease-in-out hover:bg-black hover:text-white"
              >
                Comprar
              </button>
              <button
                onClick={() => handleShowModal(data)}
                className="w-full bg-[rgba(16,184,163,0.29)] font-bold px-10 py-4 text-[#10B8A3] border-[1px]  rounded-md uppercase text-sm transition duration-700 ease-in-out  hover:bg-black hover:text-white "
              >
                Adicionar ao Carrinho
              </button>
              <div className="w-full flex items-center py-2 justify-between border-b-[1px] border-gray-400 px-4">
                <Link href={"help/profitDivision"}>
                  <div className="w-full flex items-center ">
                    <p className="bg-slate-400 rounded-xl w-[80px] px-1 h-6 text-white pl-2 ">
                      200%{" "}
                    </p>
                    <p className="bg-[#14b7a1] h-6 uppercase px-2 text-white rounded-xl -ml-6">
                      DVL
                    </p>
                  </div>
                </Link>
                <div className="">
                  <span className="font-bold text-xl">
                    {Number(data?.price).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <h1 className="font-bold uppercase">Revista Digital</h1>
                <ul className="flex flex-col py-2 gap-1 ">
                  <li className="flex items-center text-[11px] gap-2">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-[#14b7a1]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                        />
                      </svg>
                    </p>
                    <p>Acesso imediato ao volume digital 3D </p>
                  </li>
                  <li className="flex items-center text-[11px] gap-2">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-[#14b7a1]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                        />
                      </svg>
                    </p>
                    <p>Fornecemos a revista digital mais realista do mercado</p>
                  </li>
                  <li className="flex items-center text-[11px] gap-2">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-[#14b7a1]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                        />
                      </svg>
                    </p>
                    <p>Uma experiência inesquecível</p>
                  </li>
                  <li className="flex items-center text-[11px] gap-2">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-[#14b7a1]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                        />
                      </svg>
                    </p>
                    <Link href={"help/profitDivision"}>
                      <p>Vitalicio</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Magzines*/}
      {/*Articles*/}
      {
        data.article && data.article.length > 0 &&
      
      <div className="w-full py-20 mx-auto h-full px-4">
        <h1 className="py-4 uppercase text-black font-bold">
          Artigos nesta Edição
        </h1>
        <Carrousel settings={settingsArticlesCarroousel} className="mb-10 ">
          {data?.article.map((magazine, index) => (
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
                    {statusArticle(magazine.status)}
                  </button>
                </div>
                <div className="w-full mt-2 flex items-center gap-2 h-[164px] ">
                  <div className="w-[70%] h-full text-ellipsis overflow-hidden ">
                    <p className="w-full h-[164px] text-justify text-ellipsis overflow-hidden">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quod ratione, dolore odio ea ipsam pariatur molestiae
                      adipisci accusamus, neque, sequi hic numquam corrupti
                      aliquid excepturi nam voluptate sed dolor sunt. Lorem
                      ipsum, dolor sit amet consectetur adipisicing elit. Quod
                      ratione, dolore odio ea ipsam pariatur molestiae adipisci
                      accusamus, neque, sequi hic numquam corrupti aliquid
                      excepturi nam voluptate sed dolor sunt. Lorem ipsum, dolor
                      sit amet consectetur adipisicing elit. Quod ratione,
                      dolore odio ea ipsam pariatur molestiae adipisci
                      accusamus, neque, sequi hic numquam corrupti aliquid
                      excepturi nam voluptate sed dolor sunt.
                    </p>
                  </div>
                  <div className="w-[30%] h-full flex items-center justify-center ">
                    <img
                      src={magazine.cover}
                      alt={magazine.name}
                      className="w-full h-full object-cover object-center "
                    />
                  </div>
                  <div></div>
                </div>

                <div className="w-full h-full px-2 mt-2">
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

                      <p className="tex-base text-gray-400">{magazine.views}</p>
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
                    <div className="flex items-center gap-1">
                        {verifyIdSave[index] ? (
                          <p className="text-base text-blue-300 ">Salvo</p>
                        ) : (
                          <p
                            onClick={() => handleArticleFavorite(magazine)}
                            className="text-base text-gray-400"
                          >
                            Guardar
                          </p>
                        )}
                      </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Carrousel>
      </div>
}
      {/*Articles*/}
      {filterMagazines && filterMagazines.length > 0 && (
        <div className="w-full py-20 mx-auto h-full px-4">
          <h1 className="py-4 uppercase text-black font-bold">
            Revistas desta categoria
          </h1>

          <Carrousel
            settings={settingsMagazineCarrousel}
            className="relative w-full"
          >
            {filterMagazines?.map((magazine, index) => (
              <div
                key={index}
                className="max-w-[200px] relative h-full flex items-center justify-center shadow transition ease-in-out delay-150"
              >
                <Link
                  href={`/magazine/${magazine.id}`}
                  className="w-full h-full flex items-center justify-center flex-col"
                >
                  <button className="w-24 h-6 rounded-md text-white bg-[#14b7a1] absolute top-1 right-3 uppercase text-[12px] font-bold">
                    {magazine.model}
                  </button>
                  <img
                    src={magazine.cover}
                    alt={magazine.name}
                    className="w-full h-[190px] md:h-[270px] object-fill "
                  />
                  <h1 className="w-full text-black font-semibold pl-1 truncate px-3">
                    {magazine.name}
                  </h1>
                  <span className="w-full pl-1">Edição {magazine.volume}</span>
                </Link>
              </div>
            ))}
          </Carrousel>
        </div>
      )}

      <ToastContainer />
    </section>
  );
};

export default BookId;

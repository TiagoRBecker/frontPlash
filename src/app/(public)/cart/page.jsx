"use client";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../Context/index";
import { useRouter } from "next/navigation";
import { baseURLPOST, baseUrl } from "../../../utils/api";
import Loading from "../../loading";
import { useForm} from "react-hook-form"
import { useSession } from "next-auth/react";
const Cart = () => {
  const router = useRouter()
  const {data:session} = useSession()
  const { cart, removeToCart } = useContext(CartContext);
  const [loadingCart, setLoadingCart] = useState(true); // loading da tela
  const [loading ,setLoading] = useState(false)
  const [isEmpty ,setIsEmpty] = useState(true)
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    getValues,
    formState: { errors },
  } = useForm();
 
  useEffect(()=>{
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData && cartData.length > 0) {
      setIsEmpty(false); // Define o estado isEmpty como falso se houver itens no carrinho
    }
    setLoadingCart(false)

  
  },[cart])
  //calcula o total dos produtos
  const totalPrice = cart?.reduce((acc, item) => {
    return acc + item.price * 1;
  }, 0);
  const onSubmit = handleSubmit(async (data) => {

    const { name, email,id,accessToken} = session.user
    try {

      const request = await fetch(`${baseUrl}/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },
       
     
        body: JSON.stringify({ cart  ,id,name,email}),
       
      });
    
   
   
      if(request.status === 200){
        setLoading(true)
        const response = await request.json();
        router.push(`payment/?url=${response}`)
        return
        
      }
      return
    } catch (error) {
      console.log(error);
     return
    }
  });
  if (loadingCart) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loading/>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
       <p>Aguarde voce será redirecionado para um ambiente seguro ..</p>
      </div>
    );
  }

  return (

      <section className="w-full h-screen relative py-[4rem] mt-16">
        {cart.length <= 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <h3 className="text-lg font-semibold text-[#072137]">
              Seu carrinho está vazio no momento
            </h3>
          </div>
        ) : (
          <div className="w-full md:w-1/2 mx-auto h-full flex flex-col">
            <div className="w-full  max-h-[450px]  px-4 mt-10 overflow-y-auto">
              <p className="text-xl font-medium">Lista de Produtos</p>
              {cart?.map((book, index) => (
                <div className="flex border-b-2 border-gray-200 py-5 px-4 " key={index}>
                  <div className="w-full flex flex-col gap-2" >
                    <div className="flex gap-2">
                      <div className="w-[30%]">
                        <img
                          src={book?.cover}
                          alt={book?.name}
                          className="w-20 h-26 object-fill"
                        />
                      </div>
                      <div className="w-[40%]   flex flex-col gap-2 px-2">
                        <p>{book.name}</p>
                       
                        <span className="text-sm px-2 py-[1px] bg-[#14b7a1] uppercase text-white text-[12px] rounded-xl w-[80px] flex items-center justify-center">
                          {book.model}
                        </span>
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
                            Number(book.price / 100)?.toLocaleString("pt-br", {
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
            <div className="px-4 pt-8 lg:mt-0">
              <p className="text-xl font-medium">Detalhes do Pagamento</p>
              
              <form method="POST" onSubmit={onSubmit}>
                <div className="">
                 

               

                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        Subtotal
                      </p>
                      <p className="font-semibold text-gray-900">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(totalPrice / 100)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>

                    <p className="text-2xl font-semibold text-gray-900">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(totalPrice / 100)}
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center pt-6">
                  <button className="w-full py-3 font-bold bg-[#14b7a1] text-white rounded-md text-lg uppercase">Confirmar</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    
  );
};

export default Cart;

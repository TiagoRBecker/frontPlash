import Sac from "@/components/Sac";
import WPbutton from  "@/components/WPbutton"
import Link from "next/link";
const LifeTime = () => {
    return ( 
        <section className="container mx-auto  flex flex-col md:h-full md:flex md:flex-row gap-10  ">
        <div className="w-full md:w-[20%] ">
         <Sac/>
        </div>
        <div className="w-full md:flex-grow ">
        <h1 className="w-full text-2xl uppercase -mt-1  text-gray-600">
          Vitalicío
        </h1>
        <hr className="bg-gray-500 mt-4" style={{ height: "1px" }} />
        <div className="w-full flex flex-col py-4 gap-3">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 font-bold text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>

            <p className="font-bold">Benefícios de um Produto Digital Vitalício?</p>
          </div>
          <p className="text-sm pl-8">
          Ao adquirir a Revista Digital Plash, você se beneficia de um produto vitalício, o que significa:
          </p>
          <ul className="text-sm pl-11 list-decimal flex-col flex  gap-2 ">
           
           <li>
           Acesso Permanente: Uma vez que você compra a revista, ela é sua para sempre. Não há necessidade de renovação ou pagamentos adicionais.
           </li>
           <li>
           Atualizações Constantes: Receba atualizações e novos conteúdos periodicamente, mantendo-se sempre informado sobre as últimas novidades do mundo do skate.
           </li>
           <li>
           Disponibilidade Imediata: Acesse sua revista digital a qualquer momento e de qualquer lugar, diretamente do seu dispositivo preferido.
           </li>
           
           
         </ul>
        </div>
     
     
       
      <WPbutton/>
      </div>
        </section>
     );
}
 
export default LifeTime;
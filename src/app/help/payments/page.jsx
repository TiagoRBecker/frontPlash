import Sac from "@/components/Sac";
import WPbutton from  "@/components/WPbutton"

const Payments = () => {
    return (
      <section className="container mx-auto  flex flex-col md:h-full md:flex md:flex-row gap-10 ">
      <div className="w-full md:w-[20%] ">
       <Sac/>
      </div>
  
     <div className="w-full md:flex-grow ">
        <h1 className="w-full text-2xl uppercase -mt-1  text-gray-600">
          Pagamentos
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

            <p className="font-bold">Quais são as formas de pagamento aceitas no site?</p>
          </div>
          <p className="text-sm pl-8">
          Ao concluir sua compra, oferecemos as seguintes opções de pagamento: cartão de crédito, boleto bancário ou pix. Escolha a que for mais conveniente para você!
          </p>
          
        </div>
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

            <p className="font-bold">O que significa pedido em análise?</p>
          </div>
          <p className="text-sm pl-8">
          Para garantir sua segurança, todos os pedidos feitos com cartão de crédito passam por uma análise de dados cadastrais, que ocorre dentro de até 48 horas após a finalização do pedido. Durante esse período, nosso departamento responsável pode entrar em contato por telefone para confirmar seus dados. Portanto, é crucial que seus dados cadastrais estejam atualizados e completos, pois isso agiliza nosso processo de análise. Assim que seu pedido for aprovado, você receberá um e-mail de confirmação.
          </p>
        </div>
       
      <WPbutton/>
      </div>
  
      </section>
     );
}
 
export default Payments;
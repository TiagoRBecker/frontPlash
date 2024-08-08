import Sac from "@/components/Sac";
import WPbutton from  "@/components/WPbutton"
const Imprensa = () => {
  return (
    <section className="container mx-auto  flex flex-col md:h-full md:flex md:flex-row  gap-10 ">
      <div className="w-full md:w-[20%] ">
        <Sac />
      </div>
      <div className="w-full md:flex-grow ">
        <h1 className="w-full text-2xl uppercase -mt-1  text-gray-600">
          Imprensa
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

            <p className="font-bold">Contato para imprensa/mídia ?</p>
          </div>
          <p className="text-sm pl-8">
          Para informações relacionadas à imprensa, estamos disponíveis para atendê-lo. Entre em contato conosco pelo e-mail IMPRENSA@PLASHMAGAZINE.COM. Estamos prontos para fornecer materiais de imprensa, responder a perguntas, agendar entrevistas e fornecer qualquer outra informação necessária para sua cobertura jornalística. Agradecemos o seu interesse em nossa empresa e esperamos colaborar com você para compartilhar nossas histórias e novidades com o público.
          </p>
          
        </div>
        
       
      <WPbutton/>
      </div>
    </section>
  );
};

export default Imprensa;

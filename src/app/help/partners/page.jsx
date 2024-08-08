import Sac from "@/components/Sac";
import WPbutton from  "@/components/WPbutton"
import Link from "next/link";
const Partners = () => {
    return ( 
        <section className="container mx-auto  flex flex-col md:h-full md:flex md:flex-row gap-10 ">
        <div className="w-full md:w-[20%] ">
         <Sac/>
        </div>
        <div className="w-full md:flex-grow ">
        <h1 className="w-full text-2xl uppercase -mt-1  text-gray-600">
          Anuncie
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

            <p className="font-bold">Anuncie na Revista Plash e na Banca Digital Plash</p>
          </div>
          <p className="text-sm pl-8">
          A Plash Skateboarding Magazin é a escolha ideal para marcas e empresas que desejam alcançar um público engajado e apaixonado pelo skate. Oferecemos diversas oportunidades de anúncio que garantem visibilidade e impacto para sua marca. Veja como você pode anunciar conosco
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

            <p className="font-bold">Anuncie Seu Evento na Plataforma Plash</p>
          </div>
          <p className="text-sm pl-8">
          A Plash está sempre conectada com os eventos mais emocionantes na cena do skate. Anunciar seu evento na nossa plataforma oferece:
          </p>
          <ul className="text-sm pl-11 list-decimal flex-col flex  gap-2 ">
           
              <li>
              <strong>Alcance Nacional e Internacional:</strong> Nossa plataforma é visitada por skatistas e entusiastas do mundo todo, garantindo visibilidade global para seu evento.
              </li>
              <li>
              <strong>Promoção Direta:</strong> Divulgue seu campeonato, competição, ou evento especial diretamente para o público-alvo, garantindo maior engajamento e participação.
              </li>
              <li>
             <strong>Ferramentas de Inscrição e Acompanhamento:</strong>  Facilite a inscrição dos participantes e acompanhe as atualizações e resultados dos eventos através da nossa plataforma.
              </li>
              
              
            </ul>
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

            <p className="font-bold">Vantagens de Anunciar com a Plash</p>
          </div>
          <p className="text-sm pl-8">
          Engajamento Autêntico: Nossa audiência é composta por verdadeiros entusiastas do skate, que valorizam conteúdo de qualidade e estão sempre em busca de novidades
          </p>
          <p className="text-sm pl-8">
          Retorno sobre Investimento: Oferecemos preços competitivos e diversas opções de pacotes de anúncios para maximizar seu retorno.
          </p>
          <p className="text-sm pl-8">
          Suporte Dedicado: Nossa equipe está pronta para ajudar a criar campanhas eficazes e fornecer suporte durante todo o processo de anúncio.
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

            <p className="font-bold">Como Anunciar?</p>
          </div>
          <ul className="text-sm pl-11 list-decimal flex-col flex  gap-2 ">
           
              <li>
              <strong>Entre em Contato:</strong> Envie um e-mail para <strong><Link href={"mailto:suporte@plashmagazine.com.br"}>[email de contato da Plash]</Link></strong> ou entre em contato através de nossas redes sociais para iniciar a conversa.
              </li>
              <li>
              <strong>Escolha o Pacote de Anúncio:</strong> Nossos consultores ajudarão você a escolher o pacote de anúncio que melhor se adapta às suas necessidades e orçamento.
              </li>
              <li>
              <strong>Envie Seu Material:</strong> Forneça o material necessário para o anúncio, como imagens, vídeos e textos.
              Lançamento do Anúncio: Após a aprovação, seu anúncio será publicado na revista, banca digital ou plataforma, conforme acordado.
              </li>
              
              
            </ul>
          
        </div>
     
       
      <WPbutton/>
      </div>
        </section>
     );
}
 
export default Partners;
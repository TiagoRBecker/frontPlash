import Sac from "@/components/Sac";
import WPbutton from  "@/components/WPbutton"
const Work = () => {
  return (
    <section className="container mx-auto  flex flex-col md:h-full md:flex md:flex-row gap-10 ">
      <div className="w-full md:w-[20%] ">
        <Sac />
      </div>
      <div className="w-full md:flex-grow ">
        <h1 className="w-full text-2xl uppercase -mt-1  text-gray-600">
          Ajuda
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

            <p className="font-bold">O que é a Banca Digital da Plash?</p>
          </div>
          <p className="text-sm pl-8">
          Você pode encontrar produtos digitais renderizados em 3D, produtos impressos de alta qualidade, e artigos detalhados sobre a cena do skate.
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

            <p className="font-bold">O que é a "Compra Feliz" e como funciona?</p>
          </div>
          <p className="text-sm pl-8">
          A "Compra Feliz" é um conceito revolucionário onde cada compra pode se tornar uma fonte de renda passiva.
 Funciona assim:
          </p>
          <ul className="text-sm pl-11 list-decimal flex-col flex  gap-2 ">
                <li>
                Divisão de Lucro (DVL): Receba 200% do valor do produto em DVL, baseada nos ganhos mensais da empresa.
                </li>
                <li>
                10% do Lucro Mensal: Plash destina 10% de seu lucro mensal para dividir entre todas as Compras Felizes. As fontes de lucro incluem vendas de revistas digitais e impressas, anúncios pagos na revista e plataforma, e anúncios de eventos.
                </li>
                <li>
                Dashboard e Saques: Seus ganhos são creditados diretamente na sua dashboard, onde você pode acompanhar seus lucros e solicitar saques a qualquer momento.
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

            <p className="font-bold">Como posso acompanhar meus lucros na "Compra Feliz ?</p>
          </div>
          <p className="text-sm pl-8">
          Você pode acompanhar seus lucros através de sua dashboard pessoal na plataforma da Plash. Lá, você pode visualizar seus ganhos e solicitar saques quando desejar.
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

            <p className="font-bold">Que tipo de conteúdo posso esperar da Banca Digital da Plash?</p>
          </div>
          <p className="text-sm pl-8">
          A Plash oferece artigos de alta qualidade e informações atualizadas sobre o mundo do skate, garantindo relevância e profundidade em cada conteúdo.
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

            <p className="font-bold">Que tipo de conteúdo posso esperar da Banca Digital da Plash?</p>
          </div>
          <p className="text-sm pl-8">
          A Plash oferece artigos de alta qualidade e informações atualizadas sobre o mundo do skate, garantindo relevância e profundidade em cada conteúdo.
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

            <p className="font-bold">Como funciona a votação para a Capa do Ano da Plash?</p>
          </div>
          <p className="text-sm pl-8">
          Os usuários podem participar ativamente na escolha da capa do ano através de um sistema de votação na plataforma. Esta iniciativa incentiva o engajamento e a participação da comunidade.
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

            <p className="font-bold">Como posso comprar produtos na Banca Digital da Plash?</p>
          </div>
          <p className="text-sm pl-8">
          Você pode comprar produtos diretamente através da plataforma digital da Plash, acessando nosso site e selecionando os itens desejados.
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

            <p className="font-bold">A Plash está envolvida em eventos de skate?</p>
          </div>
          <p className="text-sm pl-8">
          Sim, a Plash está sempre conectada com os eventos mais emocionantes na cena do skate, tanto nacional quanto internacional. Na nossa plataforma, você pode se inscrever nos campeonatos, acompanhar atualizações e ver os resultados dos eventos.
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

            <p className="font-bold">Como posso comprar produtos na Banca Digital da Plash?</p>
          </div>
          <p className="text-sm pl-8">
          Você pode comprar produtos diretamente através da plataforma digital da Plash, acessando nosso site e selecionando os itens desejados.
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

            <p className="font-bold">Quais são as formas de pagamento aceitas na Banca Digital da Plash?</p>
          </div>
          <p className="text-sm pl-8">
          Aceitamos diversas formas de pagamento, incluindo cartões de crédito, débito, e Pix.
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

            <p className="font-bold"> Posso encontrar edições antigas das revistas Plash na Banca Digital?</p>
          </div>
          <p className="text-sm pl-8">
          Sim, temos edições antigas disponíveis para venda na nossa plataforma digital. Se estiver procurando uma edição específica, basta procurar em nosso catálogo ou entrar em contato conosco.
          </p>
          
        </div>
       
      <WPbutton/>
      </div>
    </section>
  );
};

export default Work;

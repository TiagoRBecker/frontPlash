import Sac from "@/components/Sac";

const About = () => {
  return (
    <section className="container mx-auto  flex flex-col md:h-full md:flex md:flex-row gap-10 ">
      <div className="w-full md:w-[20%] ">
        <Sac />
      </div>
      <div className="w-full md:flex-grow ">
        <h1 className="w-full text-2xl uppercase -mt-1  text-gray-600">
          Sobre
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

            <p className="font-bold">O nome Plash</p>
          </div>
          <p className="text-sm pl-8">
            A Plash nasceu de uma paixão profunda pelo skate e de um desejo
            ardente de trazer mais para a comunidade do skateboarding. Nosso
            nome, "Plash", carrega significados que refletem nossa missão e
            visão. Inicialmente, Plash significa “Mais”, representando nosso
            compromisso em oferecer “MAIS PARA TODOS”, “MAIS PARA O SKATE” e
            “MAIS PARA TODOS OS SKATISTAS”. Queríamos criar conteúdos mais
            relevantes, mais atrativos e mais interativos, para que todos
            pudessem se beneficiar com essa iniciativa.
          </p>
          <p className="text-sm pl-8">
            Com o passar do tempo, o significado de Plash evoluiu. Em menos de
            um mês, Plash passou a significar “Manto”, ampliando nossa visão e
            inspirando nosso novo lema: “PLASH, O MANTO DO SKATE”. Esse novo
            significado simboliza nosso papel protetor e unificador dentro da
            comunidade do skate. Meses depois, Plash ganhou mais um significado:
            “Capa”, reforçando nosso compromisso em ser a face e a proteção do
            skateboarding.
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

            <p className="font-bold">A editora Plash</p>
          </div>
          <p className="text-sm pl-8">
            A Editora Plash Skateboarding – Magazine se dedica a celebrar e
            promover a cultura do skate. Nosso objetivo é inspirar, informar e
            entreter skatistas de todas as idades e níveis de habilidade.
            Através de nossas publicações, buscamos fortalecer a comunidade do
            skate, promovendo um espírito de camaradagem, criatividade e
            progresso. Queremos ser mais do que uma simples editora; queremos
            ser um pilar na vida dos skatistas, oferecendo conteúdos que vão
            além das páginas e tocam a essência do skate.
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

            <p className="font-bold">A banca Plash</p>
          </div>
          <p className="text-sm pl-8">
            A Banca Digital da Plash é uma plataforma inovadora que oferece uma
            experiência única e diversificada para seus usuários. Com uma ampla
            gama de produtos digitais de alta qualidade em 3D e produtos
            impressos detalhados, a Plash garante uma experiência visual e
            funcional extraordinária.
          </p>
          <p className="text-sm pl-8">
            Além disso, a Plash introduz o conceito de Compra Feliz, permitindo
            que cada compra se torne uma fonte de renda passiva através da
            Divisão de Lucro (DVL) com uma participação nos lucros mensais da
            empresa. Os usuários podem acompanhar seus ganhos e solicitar saques
            facilmente através de um dashboard. A Plash também mantém seus
            usuários atualizados com artigos de qualidade sobre o mundo do skate
            e oferece um sistema de votação para a capa do ano, incentivando a
            participação da comunidade. Conectada aos eventos mais emocionantes
            do skate, a plataforma permite que os usuários se inscrevam em
            campeonatos e acompanhem atualizações e resultados.
          </p>
          <p className="text-sm pl-8">
            A Banca Digital da Plash é um ecossistema completo que oferece
            oportunidades de lucro, conteúdo valioso e uma forte conexão com a
            comunidade do skate. Explore a Banca Digital da Plash e descubra um
            mundo de inovação e possibilidades!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

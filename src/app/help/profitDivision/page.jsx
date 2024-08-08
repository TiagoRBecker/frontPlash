import Sac from "@/components/Sac";
import WPbutton from "@/components/WPbutton";
const profitDivision = () => {
  return (
    <section className="container mx-auto  flex flex-col md:h-full md:flex md:flex-row gap-10 ">
      <div className="w-full md:w-[20%] ">
        <Sac />
      </div>
      
        <div className="w-full md:flex-grow ">
          <h1 className="w-full text-2xl uppercase -mt-1  text-gray-600">
            DIVISÕES DE LUCROS
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

              <p className="font-bold">O que é divisões de lucros?</p>
            </div>
            <p className="text-sm pl-8">
              A DVL, ou Divisão de Lucros, é uma prática única implementada pela
              Plash company para retribuir aos nossos valiosos clientes. Em
              resumo, a DVL é uma oportunidade para compartilharmos parte dos
              nossos lucros com você, nossa comunidade engajada. A cada compra
              de uma revista impressa ou digital em nossa plataforma, nós
              compartilhamos 200% do valor do produto com você. Sim, você leu
              corretamente! Isso significa que, além de adquirir conteúdo de
              alta qualidade sobre skate, você também tem a chance de receber de
              volta até o dobro do valor que investiu em forma de lucro.
            </p>
            <p className="text-sm pl-8">
              Nosso jeito de vender é o futuro! Estamos mudando o padrão de
              vendas e compras, criando uma experiência mais justa e
              gratificante para todos os envolvidos. Mensalmente, distribuímos
              20% dos nossos lucros entre todos os clientes que adquiriram
              produtos na banca digital Plash. Essa é uma maneira de reconhecer
              e agradecer o seu apoio contínuo à nossa revista e à comunidade
              Plash. Estamos comprometidos em promover uma cultura de
              transparência e compartilhamento de benefícios com você, nosso
              cliente. Acreditamos que a DVL é uma forma justa e gratificante de
              retribuir sua lealdade e engajamento.
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

              <p className="font-bold">
                Como faço para receber minha divisão de lucro?
              </p>
            </div>
            <ul className="text-sm pl-11 list-decimal flex-col flex  gap-2 ">
              <li>
                <strong>Compre um Produto</strong>: Primeiramente, realize uma
                compra de um produto na banca digital da Plash. Isso pode
                incluir revistas impressas ou digitais, entre outros produtos
                disponíveis.
              </li>
              <li>
                <strong>Acompanhe sua Carteira:</strong> Após a compra, sua
                divisão de lucro será creditada em sua carteira na plataforma.
                Você pode acompanhar o saldo da sua carteira para verificar o
                valor disponível para recebimento.
              </li>
              <li>
                <strong>Solicite o Pagamento:</strong> Quando desejar receber
                sua divisão de lucro, você pode solicitar o pagamento. Isso pode
                ser feito através da plataforma da Plash, seguindo as instruções
                fornecidas para realizar a solicitação.
              </li>
              <li>
                <strong>Receba seu Pagamento:</strong> Após solicitar o
                pagamento, a Plash irá processar sua solicitação e transferir
                sua divisão de lucro para sua conta conforme os termos e
                condições estabelecidos.
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

              <p className="font-bold">É um golpe</p>
            </div>
            <p className="text-sm pl-8">
              A DVL (Divisão de Lucros) é uma prática inovadora e exclusiva da
              Plash Skateboarding Magazine que visa retribuir aos clientes de
              forma transparente e sustentável. É importante ressaltar que a DVL
              está integrada a todos os produtos e serviços oferecidos pela
              Plash, inclusive às novidades que surgirão no futuro. A empresa
              está comprometida em manter essa prática de compartilhamento de
              lucros como parte essencial de sua estratégia, independentemente
              das mudanças ou evoluções que ocorram ao longo do tempo. Assim, os
              clientes podem contar com a continuidade da DVL e aproveitar os
              benefícios proporcionados por essa abordagem inovadora no comércio
              digital.
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

              <p className="font-bold">
                Promovendo a Sustentabilidade Financeira
              </p>
            </div>
            <p className="text-sm pl-8">
              Ao compartilhar 200% dos lucros de cada compra com nossos clientes
              através da DVL, não apenas incentivamos a participação ativa em
              nossa plataforma, mas também promovemos a sustentabilidade
              financeira. Ao investir em produtos Plash, você está investindo
              não apenas em conteúdo de qualidade, mas também em um ciclo
              sustentável de benefícios mútuos
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

              <p className="font-bold">
                Investindo no Futuro da Comunidade Plash
              </p>
            </div>
            <p className="text-sm pl-8">
              Ao destinar mensalmente 20% dos lucros para distribuição entre
              todos os clientes que adquiriram produtos na banca digital Plash,
              estamos investindo no futuro de nossa comunidade. Essa prática não
              apenas recompensa nossos clientes engajados, mas também fortalece
              a base de apoio que torna possível nosso compromisso com a
              sustentabilidade e inovação contínuas.
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

              <p className="font-bold">Transparência e Responsabilidade</p>
            </div>
            <p className="text-sm pl-8">
              Nossa DVL não é apenas sobre lucros compartilhados; é sobre
              transparência e responsabilidade. Acreditamos em divulgar
              abertamente como nossos lucros são distribuídos e como estamos
              contribuindo para um comércio mais equitativo e sustentável. Isso
              faz parte de nossa missão de mudar não apenas o padrão do mercado
              de compra e venda, mas também o impacto que o comércio tem em
              nosso planeta e em nossa comunidade.
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

              <p className="font-bold">Juntos, Moldando o Futuro</p>
            </div>
            <p className="text-sm pl-8">
              A Plash Skateboarding Magazine está comprometida em liderar pelo
              exemplo, mostrando que é possível ter sucesso comercial enquanto
              se mantém fiel aos valores de sustentabilidade e responsabilidade
              social. Acreditamos que, ao integrar a sustentabilidade em nossa
              estratégia de DVL, estamos moldando o futuro do comércio
              responsável.
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

              <p className="font-bold">A Evolução do E-commerce Digital</p>
            </div>
            <p className="text-sm pl-8">
              Nós fazemos o que ninguém jamais fez na história do e-commerce
              digital. Somos a evolução, combinando lucro com propósito,
              inovação com responsabilidade. Na Plash Skateboarding Magazine,
              não apenas vendemos produtos, mas também construímos um movimento
              que redefine o que significa ser um negócio sustentável no século
              XXI.
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

              <p className="font-bold">Mais Duvidas?</p>
            </div>
            <p className="text-sm pl-8">
              Se você tiver mais dúvidas sobre como nossa DVL contribui para a
              sustentabilidade ou quaisquer outros aspectos de nossos serviços,
              não hesite em nos contatar. Estamos aqui para tornar sua
              experiência com a Plash Skateboarding Magazine não apenas
              gratificante, mas também significativa para o futuro de nosso
              planeta e de nossa comunidade.
            </p>
          </div>
        <WPbutton />
        </div>
   
    </section>
  );
};

export default profitDivision;

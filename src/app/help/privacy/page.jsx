import Sac from "@/components/Sac";
import WPbutton from "@/components/WPbutton";
import Link from "next/link";
const Privacy = () => {
  return (
    <section className="container mx-auto  flex flex-col md:h-full md:flex md:flex-row gap-10 ">
      <div className="w-full md:w-[20%] ">
        <Sac />
      </div>
      
        <div className="w-full md:flex-grow">
          <div className="w-full md:flex-grow ">
            <h1 className="w-full text-2xl uppercase -mt-1  text-gray-600">
              NOSSAS POLITICAS
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

                <p className="font-bold">Política de privacidade </p>
              </div>
              <p className="text-sm pl-8">
                A Plash Skateboarding Magazine valoriza a privacidade e a
                segurança dos dados de nossos usuários. Esta Política de
                Privacidade descreve como coletamos, usamos, compartilhamos e
                protegemos as informações pessoais dos usuários ao acessarem
                nosso site, plataforma e serviços.
              </p>
              <ul className="text-sm pl-11 list-decimal flex-col flex  gap-2 ">
                <li>
                  <strong>Informações Coletadas:</strong>
                  Ao utilizar nosso site e serviços, podemos coletar informações
                  como nome, endereço de e-mail, informações de pagamento,
                  endereço IP, dados de navegação, entre outros dados pessoais.
                </li>
                <li>
                  <strong> Uso das Informações:</strong>
                  Utilizamos as informações coletadas para fornecer e melhorar
                  nossos serviços, processar pagamentos, personalizar a
                  experiência do usuário, enviar comunicações relevantes,
                  realizar análises e garantir a segurança dos dados.
                </li>
                <li>
                  <strong>Compartilhamento de Informações:</strong>
                  Não compartilhamos suas informações pessoais com terceiros sem
                  o seu consentimento, exceto quando necessário para cumprir
                  obrigações legais, proteger nossos direitos, prevenir fraudes
                  ou garantir a segurança dos usuários.
                </li>
                <li>
                  <strong>Segurança dos Dados:</strong>
                  Implementamos medidas de segurança técnicas e organizacionais
                  para proteger as informações pessoais dos usuários contra
                  acesso não autorizado, uso indevido, alteração ou destruição.
                </li>
                <li>
                  <strong>Cookies e Tecnologias Semelhantes:</strong>
                  Utilizamos cookies e outras tecnologias semelhantes para
                  melhorar a experiência do usuário, analisar tendências,
                  administrar o site e coletar informações demográficas sobre
                  nossos usuários. Os usuários podem controlar o uso de cookies
                  nas configurações do navegador.
                </li>
                <li>
                  <strong> Links para Sites de Terceiros:</strong>
                  Nosso site pode conter links para sites de terceiros. Esta
                  Política de Privacidade não se aplica a esses sites, e
                  recomendamos que os usuários revisem as políticas de
                  privacidade desses sites ao acessá-los.
                </li>
                <li>
                  <strong>Alterações na Política de Privacidade:</strong>
                  Podemos atualizar esta Política de Privacidade periodicamente.
                  Notificaremos os usuários sobre alterações significativas e
                  recomendamos que revisem regularmente esta página para se
                  manterem informados sobre nossas práticas de privacidade.
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

                <p className="font-bold">
                  Meus dados pessoais serão compartilhados
                </p>
              </div>
              <p className="text-sm pl-8">
                Seus dados pessoais são uma parte essencial de sua interação
                conosco, e queremos assegurar que você tenha total transparência
                sobre como eles são tratados. Em nossa política, deixamos claro
                que não vendemos, alugamos ou transferimos seus dados para
                terceiros, a menos que seja absolutamente necessário para a
                viabilização de processos essenciais, como entregas, cobranças
                ou participação em promoções que você tenha solicitado.
              </p>
              <p className="text-sm pl-8">
                É importante ressaltar que, em algumas circunstâncias, pode ser
                preciso compartilhar suas informações com parceiros de
                marketplace. Isso acontece nos seguintes casos:
              </p>
              <ul className="text-sm pl-11 list-decimal flex-col flex  gap-2 ">
                <li>
                  No desenvolvimento das atividades comerciais, como por
                  exemplo, com operadoras de cartão de crédito para o
                  recebimento de pagamentos ou com transportadoras para a
                  entrega de produtos adquiridos.
                </li>
                <li>
                  Para proteção de nossos interesses em situações de conflito,
                  incluindo ações judiciais.
                </li>
                <li>
                  Em casos de transações ou mudanças societárias que envolvam
                  nossa empresa, onde a transferência de informações seja
                  necessária para a continuidade dos serviços. Também em
                  situações de ordem judicial ou requerimento de autoridades
                  administrativas competentes que tenham a legalidade para tal
                  solicitação, a fim de cumprir com a ordem judicial ou decisão
                  dessas autoridades.
                </li>
                <li>
                  Ressaltamos que qualquer compartilhamento de seus dados será
                  realizado com a devida segurança e em conformidade com as leis
                  aplicáveis de proteção de dados. Estamos comprometidos em
                  proteger sua privacidade e garantir que seus dados sejam
                  utilizados de forma responsável e ética.
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

                <p className="font-bold">
                  As informações disponíveis neste site são propriedade
                  exclusiva da Plash
                </p>
              </div>
              <p className="text-sm pl-8">
                No site da Plash Skateboarding Magazine, utilizamos cookies de
                forma limitada e responsável para melhorar a experiência de
                navegação dos nossos usuários. Os cookies são pequenos arquivos
                de dados que são transferidos do nosso site para o disco do seu
                computador, permitindo-nos reconhecer visitantes frequentes e
                personalizar a experiência de acordo com suas preferências.
              </p>
              <p className="text-sm pl-8">
                É importante ressaltar que os cookies não armazenam dados
                pessoais sensíveis ou identificáveis. Eles são utilizados de
                forma anônima para acompanhar o histórico de visualização e
                otimizar o funcionamento do site, oferecendo conteúdo relevante
                e personalizado para cada usuário.
              </p>
              <p className="text-sm pl-8">
                Na Plash, prezamos pela privacidade e segurança dos dados dos
                nossos usuários. Portanto, os cookies são utilizados de maneira
                transparente e respeitando as normas de proteção de dados
                vigentes. Caso tenha alguma dúvida ou queira mais informações
                sobre o uso de cookies em nosso site, estamos à disposição para
                esclarecer e fornecer orientações adicionais.
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

                <p className="font-bold">Como posso proteger minha conta?</p>
              </div>
              <p className="text-sm pl-8">
                Proteger sua conta é essencial para garantir a segurança e
                privacidade dos seus dados. Aqui estão algumas dicas importantes
                para proteger sua conta na Plash Skateboarding Magazine:
              </p>
              <ul className="text-sm pl-8 list-outside flex-col flex  gap-2 ">
                <li>
                  <strong>1) </strong>Use uma senha diferente para cada conta ou
                  dispositivo que você possui.
                </li>
                <li>
                  <strong>2) </strong> Altere suas senhas periodicamente, por
                  exemplo, a cada 3 meses.
                </li>
                <li>
                  <strong>3) </strong>Não compartilhe sua senha ou divulgue
                  dados pessoais em sites que você não conhece.
                </li>
                <li>
                  <strong>4) </strong>Sempre clique no botão "sair" quando não
                  for mais navegar em um site.
                </li>
                <li>
                  <strong>5) </strong>Escolha senhas com no mínimo oito
                  caracteres e misture letras maiúsculas e minúsculas, números e
                  símbolos especiais (#, @, *, &, %, _ ou -)
                </li>
                <li>
                  <strong>6) </strong>Nunca compartilhe números de cartão de
                  crédito. Em nosso suporte a vendas, você será direcionado para
                  digitar através do próprio telefone.
                </li>
                <li>
                  <strong>7) </strong>Certifique-se de estar em um ambiente
                  seguro, identificado pela sigla "https" em nosso site.
                </li>
                <li>
                  <strong>8) </strong>Guarde sua senha em um lugar seguro,
                  evitando anotá-la em locais visíveis.
                </li>
                <li>
                  <strong>9) </strong>Mantenha seus dados sempre atualizados em
                  sua conta.
                </li>
                <li>
                  <strong>10) </strong>Não compartilhamos senhas por telefone ou
                  e-mail.
                </li>
                <li>
                  <strong>11) </strong>Não solicitamos a instalação de programas
                  de qualquer tipo, exceto do nosso app oficial
                </li>
                <li>
                  <strong>12) </strong>Não realizamos interações pelo WhatsApp e
                  não solicitamos dados pessoais por este meio.
                </li>
                <p className="text-sm pl-8">
                  Seguindo essas orientações, você estará contribuindo para a
                  segurança da sua conta e garantindo uma experiência tranquila
                  e protegida em nosso site.
                </p>
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

                <p className="font-bold">
                Canais Oficiais da Plash
                </p>
              </div>
              <ul className="text-sm pl-11 list-decimal flex-col flex  gap-2 ">
                <li>
                <Link href={"https://www.instagram.com/plashmagazin/"} target="_blank">Instagram PlashMagazine</Link>
                </li>
                <li>
                <Link href={"https://www.threads.net/@plashmagazin/"} target="_blank">Threads PlashMagazine</Link>
                </li>
                <li>
                <Link href={"https://www.facebook.com/plashmagazin/"} target="_blank"> Facebook PlashMagazine</Link>
               
                </li>
                <li>
                <Link href={"https://x.com/plashmagazin/"} target="_blank">X PlashMagazine</Link>
                </li>
                <li>
                <Link href={"https://www.tiktok.com/@plashmagazin/"} target="_blank">Tiktok PlashMagazine</Link>
                
                </li>
                <li>
                <Link href={"https://pinterest.com/plashmagazin/"} target="_blank">Pinterest PlashMagazine</Link>
                </li>
                <li>
                <Link href={"https://www.linkedin.com/in/plashmagazin/"} target="_blank">Linkedin PlashMagazine</Link>
                </li>
                <li>
                <Link href={"https://www.youtube.com/plashmagazin/"} target="_blank">YouTube PlashMagazine</Link>
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

                <p className="font-bold">
                Canais de Atendimento?
                </p>
              </div>
              <p className="text-sm pl-8">
              Telefone: +55 47 9-9669-4708
              </p>
              <p className="text-sm pl-8">
              Cuidado com Fraudes! Com o aumento das compras online, infelizmente também aumentaram os casos de fraudes. Na Plash Skateboarding Magazine, estamos comprometidos em garantir a melhor experiência de compra aos nossos clientes, e a segurança da informação é parte fundamental desse compromisso.
              </p>
              <p className="text-sm pl-8">
              Para sua segurança, todas as nossas contas oficiais nas redes sociais possuem o selo azul de conta verificada. Isso significa que você pode confiar nas informações e interações realizadas por essas contas.
                </p>
                <p className="text-sm pl-8">
                Por favor, não compartilhe seus dados pessoais com qualquer conta não oficial da marca. Caso identifique alguma atividade suspeita ou não autorizada em nome da Plash, pedimos que denuncie imediatamente.
                  </p>
            </div>
          
          </div>
          <WPbutton />
        </div>
      
    </section>
  );
};

export default Privacy;

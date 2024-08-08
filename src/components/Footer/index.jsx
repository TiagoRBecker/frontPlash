import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="w-full h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-2 px-4">
      <div className="w-full h-full grid-cols-1 gap-3 md:grid md:grid-cols-5">
        <div className="w-full h-full flex  justify-center ">
          <Link href={"/"}>
            <img src="/logo.png" alt="Logo" className="w-full h-12 " />
          </Link>
        </div>
        <div className=" w-full flex flex-col gap-3">
          <h1 className="font-bold uppercase">Sobre</h1>
          <nav>
            <ul>
            <Link      href={"/help/profitDivision"}>
              <li>Notícias</li>
              </Link>

              <Link      href={"/help/work"}>
              <li>Trabalhe conosco</li>
              </Link>

              <Link href={"/help/privacy"} className="cursor-pointer">
              <li>Politica de Privacidade</li>
              </Link>

              <Link href={"/help/profitDivision"} className="cursor-pointer">
              <li>Ganhe dinheiro comprando</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className=" w-full flex flex-col gap-3">
          <h1 className="font-bold uppercase">Ajuda</h1>
          <nav>
            <ul>
              <Link href={"help/payments"} className="cursor-pointer">
              <li>Perguntas Frequentes</li>
              </Link>
              <Link      href={"/help/freight"} className="cursor-pointer">
              <li>Entregas e Frete</li>
             </Link>
             <Link      href={"/help/payments"} className="cursor-pointer">
              <li>Pagamentos</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className=" w-full flex flex-col gap-3">
          <h1 className="font-bold uppercase">Negócios</h1>
          <nav>
            <ul>
            <Link      href={"/help/partners"} className="cursor-pointer">
              <li>Para Parceiros</li>
              </Link>
              <Link      href={"/help/publishers"} className="cursor-pointer">
              <li>Para Editores</li>
              </Link>
              <Link      href={"/help/imprensa"} className="cursor-pointer">
              <li>Imprensa</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className=" w-full flex flex-col gap-3">
          <h1 className="font-bold uppercase">Redes Socias</h1>
          <nav>
            <ul className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <Link href={"#"}>
                  <FaFacebookF size={25} color="#000" />
                </Link>
                <Link href={"#"}>
                  <FaYoutube size={28} color="gray" />
                </Link>
                <Link href={"#"}>
                  <FaInstagram size={25} color="gray" />
                </Link>
              </div>

              <div className="flex flex-col ">
                <label>Fique por dentro das novidade da Plash Magazine</label>
                <input
                  className="w-[98%] h-8 rounded-md outline-none border-[1px] border-gray-400 pl-3 my-1"
                  placeholder="Digite seu @email"
                />
                <button className="w-[98%] bg-black text-white py-1">
                  Assinar
                </button>
              </div>
            </ul>
          </nav>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 md:flex md:flex-row items-center justify-around pt-10 pb-1 ">
        <div className="">
          <p className="text-[14px] md:text-base">
            &copy;2021 a 2024 - Plash Todos os direitos reservados
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-t-[1px] border-gray-200 text-gray-600 pt-2">
        <p>Desenvolvido por Tiago Becker</p>
        <p>Soluções em sistemas e Automação</p>
      </div>
    </footer>
  );
};

export default Footer;

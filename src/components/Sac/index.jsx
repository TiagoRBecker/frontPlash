import Link from "next/link";

const Sac = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-full text-center">
        <h1 className="font-bold uppercase text-black text-xl">
          Canais de Atendimento
        </h1>
      </div>
      <div className="flex flex-col px-4 gap-2">
        <h1>Horários de Atendimento:</h1>
        <span>
          Seg a Sexta : <strong>8h</strong> ás <strong>20h</strong>
        </span>
        <span>
          Sábados : <strong>8h</strong> ás <strong>18h</strong>
        </span>
        <span>Exectos Feriados</span>
      </div>
      <div className="flex flex-col px-4 gap-2 mt-6">
        <div className="flex items-center gap-3">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </p>
          <p>E-mail</p>
        </div>
        <div className="">
          <Link href={"mailto:suporte@plashmagazine.com.br"} target="_blank">
          <p className="font-bold">suporte@plashmagazine.com.br</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col px-4 gap-2 mt-6 ">
        <div className="flex items-center gap-3">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            
          </p>
          <p>Numero do SAC</p>
        </div>
        <div className="">
         <Link href={"https://api.whatsapp.com/send?phone=5547996694708&text=Ol%C3%A1!%20Tenho%20algumas%20d%C3%BAvidas,%20podem%20me%20ajudar?"} target="_blank">
          <p className="font-bold">+55 (47) 9-9669-4708</p>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Sac;

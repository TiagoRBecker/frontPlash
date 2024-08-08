"use client";
import { useEffect, useRef, useState } from "react";
import Spinner from "../../../../../components/Spinner";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ApiHook, baseUrl, userUrl } from "../../../../../utils/api";
import { useSession } from "next-auth/react";
import Loading from "../../../../loading";
const EditPerfil = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (status === "authenticated") {
      getUser();
    }
  }, [status]);

  
  

  const getUser = async () => {
    
    
    try {
      const response = await ApiHook.user()
       console.log(response)
      const fieldsToUpdate = {
        name: response?.name || '',
        lastName: response?.lastName || '',
        email: response?.email || '',
        city: response?.city || '',
        cep: response?.cep || '',
        adress: response?.adress || '',
        district: response?.district || '',
        numberAdress: response?.numberAdress || '',
        complement: response?.complement || '',
      };
  
      // Usando o spread operator para definir os valores de uma vez
      Object.keys(fieldsToUpdate).forEach(key => {
        setValue(key, fieldsToUpdate[key]);
      });
      return
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }
    
 
  }
  const onsubmit = handleSubmit(async (data) => {
    setLoading(true)
     try {
      const user = await ApiHook.userEditPerfil(data)
      await getUser()
     } catch (error) {
      console.log(error)
     }
     finally{
    setLoading(false)
     }
  });
  if (loading) {
    return (
      <section className="w-full h-screen flex items-center justify-center">
        <Loading />
      </section>
    );
  }
  return (
    <section className="w-full h-full flex  flex-col px-10   gap-5     ">
      <div className="w-full flex items-center justify-between border-b-[1px]   border-[#14b7a1] py-3">
        <h1 className="uppercase tex-base md:text-2xl font-bold">
          Editar Perfil
        </h1>
        <hr />
        <button className="text-sm bg-[#14b7a1] px-3 py-1 rounded-2xl text-white">
          Conta confirmada
        </button>
      </div>

      <div className="w-full">
        <form className="w-full h-full  py-4" onSubmit={onsubmit}>
          <div className="flex-col md:flex-row md:flex">
            
            <div className="w-full  h-full flex flex-col gap-2 ">
              <div className="flex-col  md:flex md:flex-row gap-2   w-full">
                <div className="w-full py-2 md:w-[50%] flex flex-col gap-2">
                  <label htmlFor="">Nome</label>
                  <input
                    {...register("name", {
                      required: "Este campo é obrigatório",
                      minLength: {
                        value: 1,
                        message: "Preencha o campo corretamente",
                      },
                    })}
                    type="text"
                    placeholder="Nome"
                    className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-700">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="w-full py-2 md:w-[50%] flex flex-col gap-2">
                  <label htmlFor="">Sobre Nome</label>
                  <input
                    {...register("lastName", {
                      required: "Este campo é obrigatório",
                      minLength: {
                        value: 1,
                        message: "Preencha o campo corretamente",
                      },
                    })}
                    type="text"
                    placeholder="Sobrenome"
                    className=" capitalize w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-700">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label htmlFor="">Endereço de E-mail</label>
                <input
                  readOnly
                  {...register("email", {
                    required: "Este campo é obrigatório",
                    minLength: {
                      value: 1,
                      message: "Preencha o campo corretamente",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Digite um endereço de e-mail válido",
                    },
                  })}
                  type="text"
                  placeholder="@E-mail"
                  className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3 bg-gray-100"
                />
                {errors.email && (
                  <p className="text-sm text-red-700">{errors.email.message}</p>
                )}
              </div>

              <div className="flex-col md:flex md:flex-row gap-2   w-full">
                <div className="w-full md:w-[70%] flex flex-col gap-2">
                  <label htmlFor="">CEP</label>
                  <input
                    {...register("cep", {
                      required: "Este campo é obrigatório",
                      minLength: {
                        value: 8,
                        message: "O cep possui 8 digitos",
                      },
                    })}
                    type="text"
                    placeholder="CEP"
                    className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                  />
                  {errors.cep && (
                    <p className="text-sm text-red-600">{errors.cep.message}</p>
                  )}
                </div>
                <div className="w-full justify-start text-base mt-1 md:w-[30%] flex  items-center md:justify-center md:mt-6 gap-2">
                  <Link
                    href={
                      "https://buscacepinter.correios.com.br/app/endereco/index.php"
                    }
                    target="_blank"
                    className="uppercase text-[#14B7A1] text-left"
                  >
                    Não sei meu cep
                  </Link>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="">Cidade</label>
                <input
                  {...register("city", {
                    required: "Este campo é obrigatório",
                    minLength: {
                      value: 1,
                      message: "Este campo é obrigatório",
                    },
                  })}
                  type="text"
                  placeholder="Cidade"
                  className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                />
                {errors.city && (
                  <p className="text-sm text-red-600">{errors.city.message}</p>
                )}
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="">Bairro</label>
                <input
                  {...register("district", {
                    required: "Este campo é obrigatório",
                    minLength: {
                      value: 1,
                      message: "Este campo é obrigatório",
                    },
                  })}
                  type="text"
                  placeholder="Bairro"
                  className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                />
                {errors.district && (
                  <p className="text-sm text-red-700">
                    {errors.district.message}
                  </p>
                )}
              </div>
              <div className="md:flex md:flex-row gap-2   w-full">
                <div className="w-full py-2 md:w-[70%] flex flex-col gap-2">
                  <label htmlFor="">Rua/Avenida</label>
                  <input
                    {...register("adress", {
                      required: "Este campo é obrigatório",
                      minLength: {
                        value: 1,
                        message: "Este campo é obrigatório",
                      },
                    })}
                    type="text"
                    placeholder="Endereço"
                    className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                  />
                  {errors.adress && (
                    <p className="text-sm text-red-600">
                      {errors.adress.message}
                    </p>
                  )}
                </div>
                <div className="w-full py-2 md:w-[30%] flex flex-col   gap-2">
                  <label htmlFor="">Numero</label>
                  <input
                    {...register("numberAdress", {
                      required: "Este campo é obrigatório",
                      minLength: {
                        value: 1,
                        message: "Este campo é obrigatório",
                      },
                    })}
                    type="text"
                    placeholder="N°"
                    className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                  />
                  {errors.numberAdress && (
                    <p className="text-sm text-red-600">
                      {errors.numberAdress.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="">Complemento</label>
                <input
                  {...register("complement", {
                    required: "Este campo é obrigatório",
                    minLength: {
                      value: 1,
                      message: "Este campo é obrigatório",
                    },
                  })}
                  type="text"
                  placeholder="Casa, Ap..."
                  className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                />
                {errors.complement && (
                  <p className="text-sm text-red-700">
                    {errors.complement.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full py-4 flex items-center justify-center">
            <button className="w-[250px] bg-[#14b7a1] px-4 py-2 rounded-md text-white">
              Atualizar Perfil
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditPerfil;

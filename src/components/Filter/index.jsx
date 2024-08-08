import { baseUrl, userUrl } from "@/utils/api";
import { getCookies } from "@/utils/cookies";
import { useState } from "react";
import ModalAlert from "@/components/Modal";
const Filter = ({  setBooks, loading,setLoading, token }) => {
  const [name, setName] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [cat, selectCat] = useState("");
  const handleSearchName = async () => {
    setLoading(true)
    try {
      const token = await getCookies()
      const getBooks = await fetch(
     
        `${userUrl}/user/perfil?name=${name}&cat=${cat}&orderBy=${orderBy}`,
        {
          method: "GET",
          cache: "no-cache",
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }
      );
      if(!getBooks.ok){
        await ModalAlert()
        return
      }
       const response = await getBooks.json()
      
       setBooks(response.library)
       setLoading(false)
       return
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
   
  };
  return (
    <div className="w-full flex flex-col   gap-3 px-5">
      <div className="w-full flex flex-col items-center justify-center ">
        <label className="text-lg text-left w-full text-gray-400">
          Ordernar:
        </label>
        <select
          className="w-full outline-none border-[1px] border-r-gray-400 h-8 rounded-md"
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value)}
        >
          <option value="">Selecionar Ordem</option>
          <option value="asc">Ultímas adicionada</option>
          <option value="desc">Primeiras Adicionada</option>
        </select>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <label className="text-lg text-left w-full text-gray-400">Nome</label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Buscar por nome"
          className="outline-none pl-4 h-8 rounded-md border-[1px] border-gray-300 w-full"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <label className="text-lg text-left w-full text-gray-400">
          Categorias
        </label>

        <input
          value={cat}
          onChange={(e) => selectCat(e.target.value)}
          type="text"
          placeholder="Buscar por categorias"
          className="outline-none pl-4 h-8 rounded-md border-[1px] border-gray-300 w-full"
        />
      </div>

      <div className="w-full h-full ">
        <button
          onClick={handleSearchName}
          className="w-full bg-[#14b7a1] text-white py-2 font-bold text-lg flex items-center justify-center mt-4"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
};

export default Filter;


import ModalAlert from "@/components/Modal";
import { AlertError } from "@/components/Modal/teste";
import { signOut } from "next-auth/react";
import Swal from "sweetalert2";

export const statusCode = async (url, options = {}) => {
  
  try {
    const request = await fetch(url, options);
    const response = await request.json(); // Obtenha o JSON após o fetch

    switch (request.status) {
      case 200:
        // Requisição bem-sucedida
        return response; // Retorne o JSON já processado
        break;
      case 400:
        throw new Error("Requisição inválida. Verifique os dados enviados.");
      case 401:
        const confirm =   await Swal.fire({
          position: "center",
          icon:"error",
          title: "Seu token de segurançao expirou",
          text:"Clique em ok para realizar o login novamente!",
          confirmButtonText: "OK",
          confirmButtonColor: "green",
        });
        if(confirm.isConfirmed){
           signOut({callbackUrl:"/"})
           return
        }
        break;
      
      case 404:
        throw new Error("Recurso não encontrado.");
      case 500:
       await AlertError()
      return 
        
      default:
        throw new Error("Erro desconhecido.");
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error; // Re-throw error para captura no componente
  }
};

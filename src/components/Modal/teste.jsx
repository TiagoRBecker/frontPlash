"use cliente"

import Swal from "sweetalert2";

export const AlertError = () => {
    const sweet =  Swal.fire(
        "Patrocinador criado com sucesso!!",
        "Clica no botão para continuar!",
        "error"
      );
      return sweet
}
 


import { getCookies } from "./cookies";
import ModalAlert from "@/components/Modal";
import { signOut } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

import { statusCode } from "./statusCode";

export const baseUrl = "http://localhost:443/public";
export const auth = "http://localhost:443/auth";
export const userUrl = "http://localhost:443/user";
//"http://191.101.70.103:5000"
////"http://localhost:443"
////"https://localhost:5000"

export const baseURLPOST = "https://localhost:5000";

class Api {
  //GET//
  
  async user() {
    try {
      const token = await getCookies();
      const url = `${process.env.NEXT_PUBLIC_USER_URL}user/perfil`
      const options ={
        method: "GET",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value}`,
        },
      }
      
     
      const response = await statusCode(url,options);
       console.log(response)
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async userLibrary() {
  

    try {
      const token = await getCookies();
      const url = `${process.env.NEXT_PUBLIC_USER_URL}user/library`
      const options ={
        method: "GET",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value}`,
        },
      }
     

      
      const response = await statusCode(url,options);
     
      return response;
    } catch (error) {
      console.log(error);
      throw new Error("Erro interno do sistema")
    }
  }
  async userLibraryBook() {

  }
  async userDvls() {
    try {
      const token = await getCookies();
      const orders = await fetch(
        `${process.env.NEXT_PUBLIC_USER_URL}user/dvls`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token?.value}`,
          },
          cache: "no-cache",
        }
      );
      if (!orders.ok) {
        await ModalAlert();
        return;
      }

      const response = await orders.json();

      return response;
    } catch (error) {
      console.log(error);
      return;
    }
  }
  async userOrders() {
    try {
      const token = await getCookies();
      const orders = await fetch(
        `${process.env.NEXT_PUBLIC_USER_URL}user/orders`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token?.value}`,
          },
          cache: "no-cache",
        }
      );
      if (!orders.ok) {
        await ModalAlert();
        return;
      }

      const response = await orders.json();

      return response;
    } catch (error) {
      console.log(error);
      return;
    }
  }
  async userOrderID(id) {
    try {
      const token = await getCookies();
      const orders = await fetch(
        `${process.env.NEXT_PUBLIC_USER_URL}user/orders/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token?.value}`,
          },
          cache: "no-cache",
        }
      );
      if (!orders.ok) {
        await ModalAlert();
        return;
      }

      const response = await orders.json();

      return response;
    } catch (error) {
      console.log(error);
      return;
    }
  }
  //##################//

  // POST 
  async payments() {}
  
  async userEditPass(data) {
    try {
      const token = await getCookies();
      const user = await fetch(
        `${process.env.NEXT_PUBLIC_USER_URL}user/password`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token?.value}`,
          },
          body: JSON.stringify({ data }),
        }
      );

      if (!user.ok) {
        const errorResponse = await user.json();
        const errorMessage = errorResponse.error || "Erro ao alterar a senha.";
        Swal.fire(
          {
            icon: "error",
            title: errorMessage,
            confirmButtonColor:"blue",
           
          }
        );
        return;
      }
      const response = await user.json();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Senha alterada com sucesso!",
        showConfirmButton: true,
        timer: 3500,
      });
      await signOut({ callbackUrl: "/auth/signin" });
      return response;
    } catch (error) {
      console.log(error);
      return;
    }
  }
  async userEditPerfil(data) {
    try {
      const editPerfil = await Swal.fire({
        title: "Deseja alterar os dados da sua conta ?",
        showConfirmButton: true,
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonColor: "#333",
        confirmButtonText: "Deletar",
        confirmButtonColor: "#d55",
      });
      if (editPerfil.isConfirmed) {
        const token = await getCookies();
        const user = await fetch(
          `${process.env.NEXT_PUBLIC_USER_URL}user/update/perfil`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token?.value}`,
            },
            body: JSON.stringify(data),
          }
        );

        if (!user.ok) {
          const errorResponse = await user.json();
          const errorMessage =
            errorResponse.error || "Erro ao alterar a senha.";
          await  Swal.fire(
              {
                icon: "error",
                title: errorMessage,
                confirmButtonColor:"blue",
               
              }
            );
          return;
        }
        const response = await user.json();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Dados  alterados com sucesso!",
          showConfirmButton: true,
          confirmButtonColor:"green",
          timer: 3500,
        });

        return response;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }
  //DELET
  async deleteAccount(data) {
    const confirmDelete = await Swal.fire({
      title: "Deseja deletar sua conta ?",
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#333",
      confirmButtonText: "Deletar",
      confirmButtonColor: "#d55",
    });
    if (confirmDelete.isConfirmed) {
      try {
        const token = await getCookies();
        const user = await fetch(
          `${process.env.NEXT_PUBLIC_USER_URL}user/delete`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token?.value}`,
            },
            body: JSON.stringify({ data }),
          }
        );

        if (!user.ok) {
          const errorResponse = await user.json();
          const errorMessage =
            errorResponse.error || "Erro ao alterar a senha.";
            Swal.fire(
              {
                icon: "error",
                title: errorMessage,
                confirmButtonColor:"blue",
               
              }
            );
          return;
        }
       
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Conta deletada com sucesso!",
          showConfirmButton: true,
          timer: 3500,
        });
        await signOut({ callbackUrl: "/auth/signin" });
        return;
      } catch (error) {
       
        throw new Error("Erro interno no sistema")
        
      }
    }
  }

  //#######################//
  async catgories() {
    try {
       const url = `${process.env.NEXT_PUBLIC_URL}/categories`
      const options =  {
        method: "GET",
        
      };
      const response = await statusCode(url,options)
      console.log(response)
      return response
      
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw new Error("Erro interno no servidor")
    }
  }
  async categoriesID(id) {
    try {
      const url = `${process.env.NEXT_PUBLIC_URL}/category/${id}`
      const options =  {
        method: "GET",
        cache:"no-cache"
        
      };
      const response = await statusCode(url,options)
    
      return response;
    } catch (error) {
      console.log(error)
      throw new Error("Erro interno no servidor")
  
    }
   
  }
  async events() {
    try {
      const url = `${process.env.NEXT_PUBLIC_URL}/events`
      const options =  {
        method: "GET",
        cache:"no-cache"
        
      };
     
      const response = await statusCode(url,options);

      
      return response;
    } catch (error) {
      console.log(error);
      throw new Error("Erro interno no sistema!")
    } 
    
  }
  async eventsID(id) {
    try {
      const url = `${process.env.NEXT_PUBLIC_URL}/event/${id}`
      const options =  {
        method: "GET",
        cache:"no-cache"
        
      };
    const response = await statusCode(url, options)  ;
   
    return response;
    } catch (error) {
      console.log(error)
      throw new Error ("Erro iterno no sistem!")
    }
   
  }
  
 
  
  
  

  async coversEvent() {}
  async magazinesID() {}
 
  async articlesFree (){
    try {
      const articles = await fetch(`${process.env.NEXT_PUBLIC_URL}/articles-most-read`, {
        method: "GET",
        cache:"no-cache"
      });
      const response = await articles.json()
      return
    } catch (error) {
      
      throw new Error ("Erro interno no servidor!")
    }
    
 
  }
}
export const ApiHook = new Api();

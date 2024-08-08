"use client";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";

import { ApiHook, baseUrl, userUrl } from "../../../../utils/api";

import { useEffect, useState } from "react";
import Loading from "../../../loading";
import { useSession } from "next-auth/react";
import Link from "next/link";
import WayPoint from "../../../../components/WayPoint";
import ModalAlert from "@/components/Modal";

const Requests = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { data: session ,status} = useSession();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalItems = data?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data?.slice(startIndex, endIndex);

  useEffect(() => {
    if(status === "authenticated"){
      getOrderByUser();
      return
    }

  }, [status]);
  const getOrderByUser = async () => {
    try {
      const orders = await ApiHook.userOrders()
      setData(orders)
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }
   
  };


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };


  if (loading) {
    return (
      <section className="w-full h-screen flex items-center justify-center">
        <Loading />
      </section>
    );
  }
 
  return (
    <section className="container min-h-screen mx-auto   py-10">
      {
        currentData && currentData.length > 0 ?
        <div >
   <WayPoint url={`/account-settings/requests`} nameCategory={"Pedidos"} name={session.user.name} />
      <TableContainer width={"100%"}>
        <Table variant="simple">
          <TableCaption>Seu Pedidos</TableCaption>
          <Thead background={"#14b7a1"}>
            <Tr>
            <Th color={"white"}>Data</Th>
              <Th color={"white"}>Nº</Th>
              <Th color={"white"}>Items</Th>
              <Th color={"white"}>Preço</Th>
              <Th color={"white"}>Cod Correios</Th>
              <Th color={"white"}>Status</Th>
       
            </Tr>
          </Thead>
          {currentData?.map((orders, index) => (
            <Tbody key={index}>
              
              <Tr>
              
                <Td>{new Date(orders.createDate).toLocaleDateString()}</Td>
                <Td>{orders.id}</Td>
                <Td>{orders.items.length}</Td>
                <Td>
                  {Number(orders.amout / 100).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Td>
                <Td className="capitalize"> 
                <Link href={"https://rastreamento.correios.com.br/app/index.php"} target="_blank">
                {orders.codeEnv ? orders.codeEnv : "Á enviar"}
                </Link>
                </Td>
                <Link href={`/account-settings/requests/${orders.id}`} className="w-full">
                <Td className="capitalize"> {orders.status}</Td>
                
              </Link>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>
      <div className="w-full flex items-center justify-center gap-4">
          <Button onClick={handlePreviousPage} disabled={currentPage === 1} bg={"#14b7a1"} textColor={"white"} _hover={"none"}>
            Anterior
          </Button>
          <span>
             {currentPage} de {totalPages}
          </span>
          <Button onClick={handleNextPage} disabled={currentPage === totalPages}  bg={"#14b7a1"} textColor={"white"} _hover={"none"}>
            Proximo
          </Button>
        </div>
        </div>
        :
        <div className="w-full flex items-center justify-center h-screen">
          <p className="text-gray-400">Nenhum ordem de serviço encontrada!</p>

        </div>

      }
    
    </section>
  );
};

export default Requests;

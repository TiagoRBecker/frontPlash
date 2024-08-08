"use client";
import React from "react";
import {
  Box,
  Progress,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

const TableDvl = ({ data,  total, receive, name, email, id, payOut, lastName, currentPage, totalPages, handleNextPage, handlePreviousPage ,availableForWithdrawal}) => {
  

  return (
    <section className="w-full min-h-screen py-10 flex gap-4 justify-center">
      <div className="w-full h-full flex flex-col md:flex-row">
      <div className="w-full md:w-[20%] flex flex-col items-center gap-3">
        <Box shadow={"2xl"} bg="white" p={8} color="black" w={"90%"}>
          <h2 className="text-center">Total</h2>
          <div className="w-full flex items-center justify-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <p className="font-bold">
              {Number((total * 2)).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </Box>
        <Box shadow={"2xl"} bg="#d96060" p={8} color="white" w={"90%"}>
          <h2 className="text-center">A Receber</h2>
          <div className="w-full flex items-center justify-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <p>
              {Number(receive).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </Box>
       
        {availableForWithdrawal > 50 ? 
          <Box bg="#2E8B57" shadow={"2xl"} p={8} color="white" w={"90%"}>
            <Link
              className="w-full"
              href={`https://api.whatsapp.com/send?phone=5547996694708&text=Ol%C3%A1%20me%20chamo%20${name} ${lastName}%0AGostaria%20de%20solicitar%20o%20saque%20${availableForWithdrawal}%0AIndetificador%20${id}%0AEmail%20do%20usu%C3%A1rio%20${email}%0A`}
              target="_blank"
            >
              <h2 className="text-center">Disponivel para Saque</h2>
              <div className="w-full flex items-center justify-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <p>
                  {Number(availableForWithdrawal).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </Link>
          </Box>
          :
          <Box bg="red" shadow={"2xl"} p={8} color="white" w={"90%"}>
           
              <h2 className="text-center">Disponivel para Saque</h2>
              <div className="w-full flex items-center justify-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <p>
                  {Number(availableForWithdrawal).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
          
          </Box>

        }
      </div>
      <div className="flex-grow">
      <TableContainer width={"100%"}>
        <h1 className="w-full text-left text-xl py-4 text-gray-400">
          Divisão de Lucro
        </h1>
        <Table variant="simple">
          <TableCaption>DVLS á pagar</TableCaption>
          <Thead background={"#14b7a1"}>
            <Tr>
              <Th color={"white"}>ID</Th>
              <Th color={"white"}></Th>
              <Th color={"white"}>Nome</Th>
              <Th color={"white"}>%</Th>
              <Th color={"white"}>Receber</Th>
              <Th color={"white"}>Pago</Th>
              <Th color={"white"}>Status</Th>
            </Tr>
          </Thead>
          {data?.map((dvl, index) => (
            <Tbody key={index}>
              <Tr>
                <Td>{dvl.id}</Td>
                <Td>
                  <img
                    src={dvl.picture}
                    alt={dvl.name}
                    className="w-14 h-10 object-contain"
                  />
                </Td>
                <Td>{dvl.name}</Td>
                <Td>
                <Progress
                      colorScheme="green"
                      value={( dvl.toReceive / dvl.paidOut * 100)}
                    />
                </Td>
                <Td>
                  {Number(dvl.paidOut).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Td>
                <Td>
                  {Number(dvl.toReceive).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Td>
                <Td>
                  {dvl.toReceive === dvl.price ? (
                    <p className="text-red-500">Finalizado</p>
                  ) : (
                    <p className="text-green-500">Ativo</p>
                  )}
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
        
      </TableContainer>
      <div className="w-full flex items-center justify-center gap-4 mt-5">
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
     
      </div>
    </section>
  );
};

export default TableDvl;

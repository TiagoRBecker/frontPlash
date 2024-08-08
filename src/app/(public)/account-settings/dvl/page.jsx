"use client";
import { useState, useEffect } from "react";
import { ApiHook, baseUrl, userUrl } from "../../../../utils/api";

import TableDvl from "../../../../components/Tables/tableDvl";
import Loading from "../../../loading";
import { useSession } from "next-auth/react";

const Dvl = async () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [availableForWithdrawal, setAvailableForWithdrawal] = useState(0);
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (status === "authenticated") {
      getDvlsUser();

      return;
    }
  },[status]);

  const getDvlsUser = async () => {
     try {
       const response = await ApiHook.userDvls()
       setData(response.dvlClient);
       setUser(response)
       setAvailableForWithdrawal(response.availableForWithdrawal)
  
     } catch (error) {
       console.log(error)
       return
     }
     finally{
      setLoading(false);
     }
    
    
  };

 

  const total = data?.reduce(
    (acc, currentValue) => acc + currentValue.price,
    0
  );
  const receive = data?.reduce(
    (acc, currentValue) => acc + currentValue.paidOut,
    0
  );
  const pay = data?.reduce(
    (acc, currentValue) => acc + currentValue.toReceive,
    0
  );


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalItems = data?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data?.slice(startIndex, endIndex);

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
    return <Loading />;
  }

  return (
    <section className="container mx-auto h-full">
    <TableDvl
      data={currentData}
      total={total}
      receive={receive}
      email={user.email}
      id={user.id}
      name={user.name}
      payOut={pay}
      lastName={user.lastName}
      currentPage={currentPage}
      availableForWithdrawal={availableForWithdrawal}
      totalPages={totalPages}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
    />
    </section>
  );
};

export default Dvl;

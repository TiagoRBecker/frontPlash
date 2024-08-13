import { ApiHook} from "../../../../../utils/api";
import TableOrderID from  "../../../../../components/Tables"
import { Suspense } from "react";
import Loading from "../../../../loading";
import WayPoint from  "../../../../../components/WayPoint"


const OrderID = async ({ params }) => {
   
   //Filtra a ordem de serviço do usuario baseado no ID
   
   const orders = await ApiHook.userOrderID(params.id)
   
  return (
    
    <Suspense fallback={<Loading/>}>

    <section className="w-[80%]  mx-auto min-h-screen">
     <WayPoint url={`/account-settings/requests`} nameCategory={"Pedidos"} name={`Pedido numero ${orders[0]?.id}`} />
     
     <TableOrderID data={orders[0]}/>
     
    </section>
    </Suspense>
  );
};

export default OrderID;

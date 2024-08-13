
import ReadBook from "../../../../components/Read";

import { Suspense } from "react";
import Loading from "../../../loading";
import { getCookies } from "@/utils/cookies";
const getBookID = async (id) => {
   const token = await getCookies()
  const request = await fetch(`${process.env.NEXT_PUBLIC_USER_URL}user/library/${id}`, {
    method: "GET",
    cache:"no-cache",
    headers: {
      "Authorization": `Bearer ${token.value}`
    },
  });
  const response = await request.json();
   console.log(response)
  return response;
};




const magazineID = async ({ params }) => {
  const id = params.id
  
  const data = await getBookID(id)
   console.log(data)
 
  return (
    <Suspense fallback={<Loading/>}>
    <section className="w-full min-h-screen">
      <ReadBook  pdf={data} />
    </section>
    </Suspense>
  );
};

export default magazineID;

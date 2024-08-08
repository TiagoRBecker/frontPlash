import { getServerSession } from "next-auth/next";
import ReadBook from "../../../../components/Read";
import { baseUrl, userUrl } from "../../../../utils/api";
import { authOptions } from "../../../../utils/authOptions";
import { Suspense } from "react";
import Loading from "../../../loading";
const getBookID = async (id,token) => {
  const request = await fetch(`${userUrl}/user/perfil/library/${id}`, {
    method: "GET",
    cache:"no-cache",
    headers: {
      "Authorization": `Bearer ${token}`
    },
  });
  const response = await request.json();
  return response;
};




const magazineID = async ({ params }) => {
  const session = await getServerSession(authOptions)
  const id = params.id
   const token = session.user.accessToken
  const data = await getBookID(id,token)
 
  return (
    <Suspense fallback={<Loading/>}>
    <section className="w-full min-h-screen">
      <ReadBook  pdf={data} />
    </section>
    </Suspense>
  );
};

export default magazineID;

import { getServerSession } from "next-auth/next";
import ReadBook from "../../../../../components/Read"
import {authOptions} from "../../../../../utils/authOptions"

import { Suspense } from "react";
import Loading from "../../../../loading";
import { baseUrl } from "../../../../../utils/api";
import ReadPDF from "../../../../../components/ReadArticle";
import WayPoint from "../../../../../components/WayPoint";
const getArticleByUser = async (id,token) => {
    const request = await fetch(`${baseUrl}/user`, {
      method: "GET",
      cache:"no-cache",
      headers: {
        "Authorization": `Bearer ${token}`
      },
    });
    const response = await request.json();
    return response;
  };
const articleID = async ({ params }) => {
  const session = await getServerSession(authOptions);
  
 
  const token = session.user.accessToken

  const data = await getArticleByUser(params.id,token);
   const filterArticle = data.articlesByUser.filter((artcile)=>(artcile.id === Number(params.id)))
  


  return (
    <Suspense fallback={<Loading/>}>
    
    <section className="max-w-[1240px] mx-auto  min-h-screen flex flex-col tems-center justify-center mt-14">
    
    <WayPoint url={"/library/articles"} nameCategory={"Artigos"} name={data.name}/>
    
  
    </section>
    </Suspense>
  );
};

export default articleID;

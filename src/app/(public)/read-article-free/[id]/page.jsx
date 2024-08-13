import { baseUrl } from "../../../../utils/api";
import Link from "next/link";
import ReadPDF from "../../../../components/ReadArticle";
import Loading from "../../../loading";
import Wrapper from "../../../wrapper";
import { Suspense } from "react";
import WayPoint from "../../../../components/WayPoint";
import ReadArticle from "../../../../components/ReadArticle";
const getArticle = async (id) => {
  const getArticleId = await fetch(`${baseUrl}/article/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  const response = await getArticleId.json();

  return response;
};
const Article = async ({ params }) => {
  const id = params.id;
  const data = await getArticle(id);

  const content = data.status === "free" ? data.description : data.description.substring(0, 10500) ;

  return (
    <Suspense fallback={<Loading />}>
      <section className="container   h-full  flex flex-col mt-16   py-10 px-4 mx-auto ">
        <WayPoint
          url={`/magazine/${data.magazine?.id}`}
          nameCategory={data.magazine?.name}
          name={data?.name}
        />
        <ReadArticle data={data} content={content}/>
      </section>
    </Suspense>
  );
};

export default Article;


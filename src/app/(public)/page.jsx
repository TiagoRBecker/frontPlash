import { Suspense } from "react";
import Banner from "../../components/Banner/index";
import Categories from "../../components/Categories";
import LastMagazines from "../../components/LastMagazine";
import Loading from "../loading";
import Events from "../../components/Events/event";
import CoverEvents from "../../components/Events/coverEvent";
import ArticlesFree from "../../components/ArticlesHome/free";
import ArticlesRecommended from "../../components/ArticlesHome/recommended";
import MostViews from "../../components/ArticlesHome/mostViews";
import Sponsors from "../../components/Sponsors";
import Error from "../error";
export default function Home() {
  return (
    <section className="w-full h-full ">
      <Banner />

      <div className="w-full overflow-x-hidden md:max-w-[1140px]  mx-auto h-full">
        <Sponsors />
        <LastMagazines />
        <ArticlesRecommended />
        <Categories />
        <ArticlesFree />
        <MostViews />
        <Events />
        <CoverEvents />
      </div>
    </section>
  );
}

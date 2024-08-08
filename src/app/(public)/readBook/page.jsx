"use client";

import { useEffect, useState } from "react";
import ReadBook from "../../../components/Read";

import Script from "next/script";

const SeuComponente =  () => {
 
  const data = "/a.pdf";

  useEffect(() => {
    // Coloque o código que você deseja executar no carregamento do componente aqu

   const book =  new $("#container").FlipBook({
      pdf: data,
      controlsProps: {
        loadingAnimation: {
          book: false,
        },
        cmdPrint: {
          print: false,
        },
        share: false,
      },
      propertiesCallback: function (props) {
        props.page.depth /= 2.5;
        props.cover.padding /= 0.002;
        return props;
      },
      template: {
        html: "/templates/default-book-view.html",
        styles: ["/css/short-black-book-view.css"],
        links: [
          {
            rel: "stylesheet",
            href: "/css/font-awesome.min.css",
          },
        ],
        script: "/js/libs/pdf.worker.js",
        script: "/js/default-book-view.js",
        sounds: {
          startFlip: "/sounds/start-flip.mp3",
          endFlip: "/sounds/end-flip.mp3",
        },
      },
      // Restante do código FlipBook
    });

    const style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `
            .container {
              height: 95vh;
              width: 95%;
              margin: 20px auto;
            }
            .fullscreen {
              background-color: #ffffff00;
            }
          `;
    document.head.appendChild(style);
    return()=>{
      book.dispose()
    }
  }, []);

  return (
    <>
      <section className="w-full h-full bg-[#333] py-10">
        <div className="container" id="container"></div>
      </section>
    </>
  );
};

export default SeuComponente;

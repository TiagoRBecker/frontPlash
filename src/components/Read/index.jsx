"use client";
import { usePathname } from "next/navigation";
// pages/[slug].js
import Script from "next/script";
import { useEffect } from "react";

const SeuComponente = ({pdf}) => {
  const path = usePathname()
 

  useEffect(() => {
    // Coloque o código que você deseja executar no carregamento do componente aqu
   
    const book = new $("#container").FlipBook({
      pdf: pdf,
      controlsProps: {
        loadingAnimation: {
          book: false,
        },
        cmdPrint: {
          print: false,
        },
        share: false,
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
        script:"/js/libs/pdf.worker.js"  ,
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
    return ()=>{
      book.dispose()
    }
   
  }, []);
  
 
 

  return (
    <>
     <Script
                strategy="beforeInteractive"
                src="/js/libs/jquery.min.js"
              />
              <Script
                strategy="beforeInteractive"
                src="/js/libs/html2canvas.min.js"
              />
              <Script
                strategy="beforeInteractive"
                src="/js/libs/three.min.js"
              />
              <Script strategy="beforeInteractive" src="/js/libs/pdf.min.js" />
              <Script strategy="beforeInteractive" src="/js/pdf.worker.js" />
              <Script
                strategy="beforeInteractive"
                src="/js/dist/3dflipbook.js"
              />
     
      <section className="w-full h-full bg-[#333] py-10">
        <div className="container" id="container"></div>
      </section>
    </>
  );
};

export default SeuComponente;

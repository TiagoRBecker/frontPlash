"use client"

import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { StyleSheet } from "@react-pdf/renderer";
import Script from "next/script";
import { useMediaQuery } from '@react-hook/media-query';
const ReadPDF = ({pdf,className}) => {
  const screenSize = useMediaQuery('(min-width: 768px)'); 

  const defaultScale = screenSize ? 1.8 : 0.5;
  const styles = StyleSheet.create({
    body: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
      fontFamily: "AntonFamily",
    },
    text: {
      margin: 12,
      fontSize: 10,
      textAlign: "justify",
      fontFamily: "AntonFamily",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
      fontFamily: "AntonFamily",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 0,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
      fontFamily: "AntonFamily",
    },
  });
    return ( 
   
    <>
      <Script strategy="beforeInteractive" src="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js" />
  <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js`}
        style={{ width: "100%", height: "100%", }}
      >
        <div className={className}>
          <Viewer fileUrl={pdf}  defaultScale={defaultScale} style={styles} size={20}/>
        </div>
      </Worker>
      </>

    
     
     );
} 
 
export default ReadPDF;


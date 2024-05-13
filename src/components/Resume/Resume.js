import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import myCV from '../../Assests/pdfs/CV_SG.pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


const Resume = () => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onLoadHandler(numPages) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={myCV} onLoadSuccess={onLoadHandler}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of 1</p>
    </div>
  );
}

export default Resume;
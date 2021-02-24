import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Pdf extends Component {
  state = {
    pageNumber: 1,
    file: 'https://drive.google.com/file/d/1256XFvekmpWGuZD_buYx-iYDOmqjep_X/preview'
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, file } = this.state;
    return (
      <div className="PDF">
        <Document
          file={file}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}

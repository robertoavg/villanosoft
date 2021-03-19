import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import url from "../../src/img/cv.pdf";
import url1 from "../../src/img/cv1.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Pdf extends Component {
  state = {
    pageNumber: 1,
    file: url,
    file1: url1,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, file, file1 } = this.state;

    if (this.props.i === "Español") {
      return (
        <div className="PDF">
          <Document file={file} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      );
    }

    if (this.props.i === "English") {
      return (
        <div className="PDF">
          <Document file={file1} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      );
    }
  }
}

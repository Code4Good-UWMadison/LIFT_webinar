import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import pdf from '../sample_annotated.pdf'; // Tell webpack this JS file uses this image

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

class Attach extends Component {
  state = {
    numPages: null,
  };

  onFileChange = event => {
    this.setState({
      file: event.target.files[0],
    });
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { numPages } = this.state;

    return (
      <div>
        <header>
          <h1>Annotated Sample</h1>
        </header>
        <div>
          <Document file={pdf} onLoadSuccess={this.onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} wrap/>
            ))}
          </Document>
        </div>
      </div>
    );
  }
}

export default Attach;

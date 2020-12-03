import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import onePage from './1.png';
import twoPage from './2.png';
import thrPage from './3.png';
import forPage from './4.png';
import fivPage from './5.png';

class ImgSlide extends Component {
  render() {
    return(
    <Carousel data-interval="false">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={onePage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Page</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={twoPage}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second Page</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thrPage}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Page</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={forPage}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Fourth Page</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fivPage}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3>Fifth Page</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>);
  }
}

export default ImgSlide;
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import onePage from './1.png';
import twoPage from './2.png';
import thrPage from './3.png';

class ImgSlide extends Component {

  constructor(props){
    super(props);

    const divStyle1 = {
      marginRight: 70,
      color: 'grey',
      fontSize: 48,
      fontWeight: "bold",
    };

    const divStyle2 = {
      marginLeft: 70,
      color: 'grey',
      fontSize: 48,
      fontWeight: "bold",
    };
    
    this.state = {
      nextIcon:  <span style={divStyle2}>&gt;</span> ,
      prevIcon: <span style={divStyle1}>&lt;</span> 
    }
  }



  render() {
    const {nextIcon,prevIcon}=this.state;
    return (
        <Carousel nextIcon ={nextIcon} prevIcon={prevIcon} >
          <Carousel.Item>
            <img className="d-block w-100" src={onePage} alt="First slide" />
            <Carousel.Caption>
              <h3>First Page</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={twoPage} alt="Third slide" />

            <Carousel.Caption>
              <h3>Second Page</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={thrPage} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third Page</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    );
  }
}

export default ImgSlide;

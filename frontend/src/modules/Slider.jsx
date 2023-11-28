import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import pc1 from '../images/pc1.jpg';
import pc2 from '../images/pc2.jpg';
import pc3 from '../images/pc3.jpg';
import MDBContainer from 'mdbreact'

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  return (
    
        <div className = "container">
            <div className = "row">
                <div className = "col text-center">
                    <Carousel activeIndex={index} onSelect={handleSelect} >
                    <Carousel.Item>
                        <Image src = {pc1} fluid  />
                        <Carousel.Caption>
                        <h3>Build your dream computer! </h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Image src = {pc2} fluid  />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Image src = {pc3} fluid  />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    
  );
}


export default Slider;
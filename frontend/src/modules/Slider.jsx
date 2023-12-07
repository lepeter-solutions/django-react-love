import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import pc1 from '../images/pc1.jpg';
import pc2 from '../images/pc2.jpg';
import pc3 from '../images/pc3.jpg';
import MDBContainer from 'mdbreact';
import axios from 'axios';
import React, { useEffect } from "react";
import urlToApi from '../Variables.jsx';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [data, setData] = useState([]);
  
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get(urlToApi + "/sliderslide/");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    let url = "http://localhost:8000/";
    // Call fetchData on component mount
    useEffect(() => {
      fetchData();
    }, []);
  
  return (
    
        <div className = "container md-8">
            <div className = "row">
                <div className = "col text-center">
                    <Carousel activeIndex={index} onSelect={handleSelect} >
                    {data.map((post) => (
                    <Carousel.Item key = {post.title}>
                        <Image src = {url + post.img} fluid className = "rounded" />
                        <Carousel.Caption>
                        <h3>{post.title} </h3>
                        <p><b>{post.description}</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ))}
                    </Carousel>
                </div>
            </div>
        </div>
    
  );
}


export default Slider;
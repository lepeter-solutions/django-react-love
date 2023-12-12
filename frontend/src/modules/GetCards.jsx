import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import char from '../images/char.jpg';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import urlToApi from '../Variables.jsx';


function GetCards() {
  const [data, setData] = useState([]);
  
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get(urlToApi + "/imgcards/");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    // Call fetchData on component mount
    useEffect(() => {
      fetchData();
    }, []);

    const titleStyle = {
      fontFamily: 'Bebas Neue',
      fontSize: '2.5rem',
    }
  return (
    <div className = "container-fluid">
    <div className = "row">
    <CardGroup className = "p-5 bg-transparent">
       {data.map((post) => (
            <div className = "col col-12 col-sm-12 col-md-6 col-lg-4">
            <Card className = "p-1 bg-transparent border-0">
            <Card.Img style = {{borderRadius: "50px"}} className = "p-1 bg-transparent border-0" variant="top" src={urlToApi + post.img} />
            <Card.Body>
              <Card.Title style = {titleStyle}>{post.title}</Card.Title>
              <Card.Text>
                {post.description}
              </Card.Text>
            </Card.Body>
            
          </Card>
          </div>
          ))}
    </CardGroup>
    </div>
    </div>
  );
}

export default GetCards;
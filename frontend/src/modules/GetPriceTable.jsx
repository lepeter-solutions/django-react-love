import axios from 'axios';
import React, { useState, useEffect } from "react";
function GetPriceTable(){
    const [data, setData] = useState([]);
  
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/prices");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    // Call fetchData on component mount
    useEffect(() => {
      fetchData();
    }, []);
    return (
      <div>
        <h2>Szolgáltatások és árak:</h2>
        <ul>
          {data.map((post) => (
            <li key={post.szolgaltatas}>{post.szolgaltatas} - {post.arak} FT</li>
          ))}
        </ul>
      </div>
    );
  };
  
export default GetPriceTable;
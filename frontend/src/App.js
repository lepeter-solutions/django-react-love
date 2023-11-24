import axios from 'axios';
import React, { useState, useEffect } from "react";
import Slider from './Slider';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className = "container">
      <GetHeader />
      <div className = "container-fluid">
        <Slider />
      </div>
      <GetPriceTable />
    </div>
  );
};

function GetHeader(){
  return (
  <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-4">Simple header</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
      </ul>
    </header>
  );
}



function GetPriceTable(){
  const [data, setData] = useState([]);

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000");
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



export default App;

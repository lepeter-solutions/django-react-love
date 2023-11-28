import axios from 'axios';
import React, { useState, useEffect } from "react";
import Slider from './modules/Slider';
import GetHeader from './modules/GetHeader';
import GetPriceTable from './modules/GetPriceTable';
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






export default App;

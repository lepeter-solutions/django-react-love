import axios from 'axios';
import React, { useState, useEffect } from "react";
import Slider from './modules/Slider';
import GetHeader from './modules/GetHeader';
import GetPriceTable from './modules/GetPriceTable';
import MainPageText from './modules/MainPageText';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  return (
    <div>
    <GetHeader />
    <div id = "mainwrapper" className = "container ">
      <div className = "container-fluid mb-4 p-4">
        <Slider />
      </div>
      <MainPageText />
      <GetPriceTable />
    </div>
    </div>
  );
};





export default App;

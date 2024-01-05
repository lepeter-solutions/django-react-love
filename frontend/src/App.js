import axios from 'axios';
import React, { useState, useEffect } from "react";
import Slider from './modules/Slider';
import GetHeader from './modules/GetHeader';
import GetPriceTable from './modules/GetPriceTable';
import MainPageText from './modules/MainPageText';

import 'bootstrap/dist/css/bootstrap.min.css';
import GetCards from './modules/GetCards';
import PageInfos from './modules/PageInfos';



function App() {
  
  return (
    <div>
    <div className = "container-fluid p-0"><GetHeader /></div>
    <div id = "mainwrapper" className = "container main-bg-color p-0">
    
    
      <div className = "container-fluid mb-4 p-4">
        <Slider />
      </div>
        <MainPageText />
        <GetCards />
        <PageInfos />
        <GetPriceTable />
      </div>
    </div>
  );
};





export default App;

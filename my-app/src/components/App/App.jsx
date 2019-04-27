import React from 'react'

import './App.css'
import Chart from '../Chart'


export default () =>
  <div className="App">
   
    <div className="App-chart-container">
     
      <p className="App-chart-source">
        Data source: <a href="http://api.worldbank.org/countries/USA/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json"> US GDP </a>
      </p>

      <Chart />
    </div>
  </div>

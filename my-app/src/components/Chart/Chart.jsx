import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import axios from 'axios';
import Axes from '../Axes'
import Bars from '../Bars'
import ResponsiveWrapper from '../ResponsiveWrapper'


class Chart extends Component {
  constructor() {
    super()
    this.xScale = scaleBand()
    this.yScale = scaleLinear()
    this.state = {
    responseData : []
    }
  }
 

  async componentDidMount() {
    
try {
    const response =  await axios.get("http://localhost:8000/api/graph");
    const data =  await  response.data[1];
    this.setState({
      responseData : data
    })
  } catch(error) {
    console.log(error);
  }
   /* axios.get('http://localhost:8000/api/graph').then(res => {
      this.setState({
        responseData : res.data[1]
      })
      console.log(this.state.responseData)
    }) */
  }

  render() {
    const margins = { top: 50, right: 20, bottom: 100, left: 60 }
    const svgDimensions = {
      width: Math.max(this.props.parentWidth, 400),
      height: 500
    }
   
    const maxValue = Math.max(...this.state.responseData.map(d => d.value));
  


   const xScale = this.xScale
    .padding(0.5)
    .domain(this.state.responseData.map(d => d.date))
    .range([margins.left, svgDimensions.width - margins.right])
    
     const yScale = this.yScale
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top])

    

   

    return (
      <svg width={svgDimensions.width} height={svgDimensions.height}>
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
        />
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={this.state.responseData}
          maxValue={maxValue}
          svgDimensions={svgDimensions}
        />
      </svg>
    )
  }
}

export default ResponsiveWrapper(Chart)

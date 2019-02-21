import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props)
    this.state = {
      BarGraph: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Salmon Graph',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [1, 2, 3, 4, 5, 6, 7]
          }
        ]
      }

    }
  }

    BarGraph = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Salmon Graph',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [1, 2, 3, 4, 5, 6, 7]
        }
      ]
    };
    render(){
    return (
      <div>
          <Bar data={data} />
      </div>
    )
   }
}
   export default Chart;
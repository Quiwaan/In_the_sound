import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props)
    this.state = {
      lineGraph: {
        labels: [1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
        datasets: [
          {
            label: 'Salmon Population',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'pink',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [2992459, 3381761, 3137175, 4010682, 2802895, 2351395, 2219068, 1967825, 1604821, 1752102, 1264566, 1045646, 1362862, 1960583, 1773136, 1474023, 1534979, 1464993, 1449349, 783810, 638622, 210520, 409621, 419288, 377672, 253742, 261529, 453473, 1015123, 720106, 808150, 597631, 465882, 318594, 418595, 294125, 662333, 451128, 561566,
              645483, 696419, 902373, 800045, 493854, 548514]
              
          }
        ]

      }
    
    }
  }


  
  render(){
    return (
      <div className="line-graph">
          <Line data={this.state.lineGraph}
          options={this.state.options} />
      </div>
    )
  }
}

export default Chart;
import React, {Component} from 'react';
import GetInvolved from './Get_Involved';
import Pollutants from './media/inthesound.pollutants.png';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Data from './Data';
import {Line} from 'react-chartjs-2';

const Handle = Slider.Handle;
const createSliderWithTooltip = Slider.createSliderWithTooltip;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  )
}

const wrapperStyle = { width: 1500, margin: 50 };

class LearnMore extends Component {
  constructor(){
    super()
    this.state = {
      value: 1973,
<<<<<<< HEAD
      salmon_population: [2576590, 1388820, 2008472, 732689, 2090171, 707113, 581259, 2634443, 3392549, 2458882, 3259670, 1123305, 2639274, 2216030],
=======
      year_to_salmon: {
        0:  2576590, 
        10: 1388820, 
        20: 2008472, 
        30: 732689, 
        35: 2090171, 
        40: 707113, 
        50: 581259, 
        60: 2634443, 
        70: 3392549, 
        80: 2458882, 
        90: 3259670, 
        95: 1123305, 
        100: 2639274
      },
>>>>>>> 69b910f8489d7d7126ae25703370de8fbf3b6c3c
      lineGraph: {
        labels: [1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006],
        datasets: [
          {
            label: 'Water Quality',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [83, 77, 82, 76, 89, 83, 92, 91, 89, 81, 74, 75, 89, 75]
 
          }
        ]
      }
    }
  }

    


  componentDidMount() {
    this.handleChange()
    this.getData()
  }

  // Get slider value
  handleChange = (value) => {
    this.setState({
      value,
    })
    console.log(value)
    this.getData()
  }

  // Hard coded data to pass down
  getData = () => {

      this.setState({salmon_population: this.state.year_to_salmon[this.state.value]})

  }


  render(){
    return (
      <div>
        <img src={Pollutants} alt="pollutants chart" className="pollutants-chart"/>
        <div className="line-graph">
          <Line data={this.state.lineGraph} />
        </div>
        <div>
          <Data salmon_population={this.state.salmon_population} />
        </div>
        <div className="container-slider">
          <div className="slider" style={wrapperStyle}>
            <p>Choose the year:</p>
            <Slider min={0} defaultValue={25} marks={{ 0: 1994, 10: 1995, 20: 1996, 30: 1997, 35: 1998, 40: 1999, 50: 2000, 60: 2001, 70: 2002, 80: 2003, 90: 2004, 95: 2005, 100: 2006 }} step={null} onChange={this.handleChange} value={this.state.value}/>
          </div> 
        </div>
        <GetInvolved />
      </div>
    )
  }
}

export default LearnMore;
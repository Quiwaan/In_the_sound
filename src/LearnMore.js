import React, {Component} from 'react';
import GetInvolved from './Get_Involved';
import Pollutants from './media/inthesound.pollutants.png';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Data from './Data';

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

const wrapperStyle = { width: 300, margin: 50 };

class LearnMore extends Component {
  constructor(){
    super()
    this.state = {
      value: 1973,
      waterToxicity: 0
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
    if(this.state.value === 0){
      this.setState({waterToxicity: 0})
    }
    if(this.state.value === 25){
      this.setState({waterToxicity: 1})
    }
    if(this.state.value === 50){
      this.setState({waterToxicity: 2})
    }
    if(this.state.value === 75){
      this.setState({waterToxicity: 3})
    }
    if(this.state.value === 100){
      this.setState({waterToxicity: 4})
    }   
  }


  render(){
    return (
      <div>
        <img src={Pollutants} alt="pollutants chart" className="pollutants-chart"/>
        <div>
          <Data waterToxicity={this.state.waterToxicity} />
        </div>
        <div className="slider" style={wrapperStyle}>
          <p>Choose the year</p>
          <Slider min={0} defaultValue={25} marks={{ 0: 1979, 25: 1989, 50: 1999, 75: 2009, 100: 2019 }} step={null} onChange={this.handleChange} value={this.state.value}/>
        </div> 
        <GetInvolved />
      </div>
    )
  }
}

export default LearnMore;
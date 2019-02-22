import React, {Component} from 'react';
import Get_Involved from './Get_Involved';
import Pollutants from './media/inthesound.pollutants.png';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

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
  render(){
    return (
      <div>
        <img src={Pollutants} alt="pollutants chart" className="pollutants-chart"/>
        <div className="slider" style={wrapperStyle}>
          <p>Choose the year</p>
          <Slider min={0} defaultValue={20} marks={{ 0: 1979, 25: 1989, 50: 1999, 75: 2009, 100: 2019 }} step={null} />
        </div> 
        <Get_Involved />
      </div>
    )
  }
}

export default LearnMore;
import React, {Component} from 'react';

class Data extends Component{
  render(){
    return (
      <div className="content">
        <p>Here comes water data from props passed from the learn more parent component.</p>
        <p>{this.props.waterToxicity}</p>
      </div>
    )
  }
}

export default Data;
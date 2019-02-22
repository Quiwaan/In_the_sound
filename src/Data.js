import React, {Component} from 'react';

class Data extends Component{
  render(){
    return (
      <div className="content">
        <p>Salmon Population for the year: </p>
        <p>{this.props.salmon_population}</p>
      </div>
    )
  }
}

export default Data;
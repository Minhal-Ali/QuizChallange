import React, { Component } from "react";

class MultiProgressBar extends Component {
  render() {
    const { progress1,progress2,progress3 } = this.props;
    return (
      <div className="progress" style={{ width: "100%", height: "10px" ,backgroundColor:`transparent`}
    }>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${progress3}%`, height: "10px" ,backgroundColor:`grey`,position:'absolute',top:0,left:0}}
        ></div>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${progress2}%`, height: "10px" ,backgroundColor:`blue`,position:'absolute',top:0,left:0}}
        ></div>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${progress1}%`, height: "10px" ,backgroundColor:`black`,position:'absolute',top:0,left:0}}
        ></div>
      </div>
    );
  }
}

export default MultiProgressBar;

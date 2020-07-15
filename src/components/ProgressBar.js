import React, { Component } from "react";

class ProgressBar extends Component {
  render() {
    const { progress,color } = this.props;
    return (
      <div className="progress" style={{ width: "100%", height: "10px" ,backgroundColor:`transparent`}}>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${progress}%`, height: "10px" ,backgroundColor:`${color}`}}
        ></div>
      </div>
    );
  }
}

export default ProgressBar;

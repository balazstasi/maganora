import React, { Component } from "react";
import "./ButtonList.css";

class ButtonList extends Component {
  static defaultProps = {
    colors: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b"]
  };
  constructor(props) {
    super(props);
    this.state = { color: "cyan" };
  }

  changeColor(c) {
    console.log(`newColor is: ${c}`);
    this.setState({ color: c });
  }

  render() {
    return (
      <div className='ButtonList' style={{ backgroundColor: this.state.color }}>
        {this.props.colors.map(c => {
          return (
            // this.changeColor(c) nem jo mert mindig megfog hivodni ahanyszor renderelunk
            <button style={{"backgroundColor" : c}} onClick={() => this.changeColor(c)}>
              Click on me!
            </button>
          );
        })}
      </div>
    );
  }
}
// end

export default ButtonList;

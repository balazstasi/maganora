import React, { Component } from 'react'

class Coin extends Component {
  render() {
    let { imgSrc, side } = this.props.info
    // let imgSrc = this.props.info.imgSrc;
    // let side = this.props.info.side
    return(
      <div className="Coin">
        <img src={imgSrc} alt={side} />
      </div>
    )
  }
}

export default Coin;
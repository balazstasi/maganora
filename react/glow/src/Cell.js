import React, { Component } from "react";
import "./Cell.css";

/** Egy külön cella a táblán
 *
 * Nincs state --- csak két props:
 *
 * - flipCellsAroundMe: egy függvény, amit a <Board /> komponensből kapunk,
 * arra van, hogy a körülötte levő cellákat átkapcsolja
 *
 * - isLit: boolean, be van-e kapcsolva a cella?
 *
 * Itt kezeljük a klikkeket, a filpCellsAroundMe meghívásával átadjuk a <Board />
 * komponensnek a klikkelt cella koordinátáját
 *
 **/

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    // 'telefonáljunk fel' a Board-hoz hogy forgassa meg a körülötte lévő cellákat
    this.props.flipCellsAroundMe();
  }

  render() {
    let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");

    return <td className={classes} onClick={this.handleClick} />;
  }
}

export default Cell;

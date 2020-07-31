import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

/** GLOW.
 *
 * Props:
 *
 * - nrows: a sorok száma a táblán
 * - ncols: az oszlopok száma a táblán
 * - chanceLightStartsOn: float, esély, hogy a cella be legyen kapcsolva létrejöttekor
 *
 * State:
 *
 * - hasWon: boolean, true amikor a tábla teljesen ki van kapcsolva
 * - board: 2D boolean tömb (tömbök tömbje)
 *
 *  ┌───┬───┬───┐
 *  │ . │ . │ . │
 *  ├───┼───┼───┤
 *  │ O │ O │ . │ ('.' a kikapcsolt cella, és 'O' a bekapcsolt cella)
 *  ├───┼───┼───┤
 *  │ . │ . │ . │
 *  └───┴───┴───┘
 *
 *
 *
 *  Ez lenne: [[false, false, false], [true, true, false], [false, false, false]]
 *  [[1,2,3],[4,5,6],[7,8,9]]
 *
 *  Renderelnünk kell egy HTML táblát <Cell /> elemekkel.
 *
 *  Klikkeket itt nem kezelünk le, azok a külön cellákban lesznek lekezelve
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25,
  };

  constructor(props) {
    super(props);

    // TODO: Kezdetleges state
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
  }

  /** Csináljunk egy ncol x nrows táblát, ahol random módon vannak a külön cellák be- vagy kikapcsolva */

  createBoard() {
    let board = [];
    // TODO: csináljunk egy tömbök tömbjét igaz és hamis booleanokból
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  }

  /** kezeljük egy cella változását és nézzük meg nyertünk-e */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;

    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // Ha a koordináta valós kapcsoljuk át!

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: a cellát és le, fel, jobbra, balra levőt is kapcsoljuk át
    flipCell(y, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y - 1, x);
    flipCell(y + 1, x);

    // nyerés: minden cella ki van kapcsolva
    // TODO: határozd meg, hogy nyertünk-e

    let hasWon = board.every(row => row.every(cell => !cell));

    this.setState({board, hasWon});
  }

  /** Rendereljük a győztes szöveget vagy magát a táblát, ha még nem nyertünk. */

  makeTable() {
    let tblBoard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            isLit={this.state.board[y][x]}
            flipCellAroundMe={() => this.flipCellsAround(coord)}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    return (
      <table className="Board">
        <tbody>{tblBoard}</tbody>
      </table>
    );
  }
  render() {
    // ha a játék meg van nyerve mutass egy 'You win!' szöveget és semmi mást

    // TODO

    // Tábla elkészítése

    // TODO
    return (
      <div className="">
        <h1>BOARD</h1>
        {this.makeTable()}
      </div>
    );
  }
}

export default Board;

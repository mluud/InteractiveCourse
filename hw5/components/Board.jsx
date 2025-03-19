import { useState } from 'react';
import OneButton from '../components/OneButton'

function Board({ xIsNext, squares, onPlay }) {
    const boardRow = [];

    for (let indexA = 0; indexA < 3; indexA++) {
      const listOfOneButton = [];
      for (let indexB = 0; indexB < 3; indexB++) {
        listOfOneButton.push(<OneButton value={squares[indexB+indexA*3]} onSquareClick={() => handleClick(indexB+indexA*3)}/>);
      }
      boardRow.push(<div className="board-row">{listOfOneButton}</div>);
    }

    function handleClick(i) {
      if (squares[i] || calculateWinner(squares)) {
        return;
      }
      
      const nextSquares = squares.slice();
  
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      onPlay(nextSquares);
    }
  
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
  
    return (
      <div id="buttonGrid">
        <div className="status">{status}</div>
        {boardRow}
      </div>
    )
  }

/*   <div className="board-row">
  <OneButton value={squares[0]} onSquareClick={() => handleClick(0)}/>
  <OneButton value={squares[1]} onSquareClick={() => handleClick(1)}/>
  <OneButton value={squares[2]} onSquareClick={() => handleClick(2)}/>
</div>
<div className="board-row">
  <OneButton value={squares[3]} onSquareClick={() => handleClick(3)}/>
  <OneButton value={squares[4]} onSquareClick={() => handleClick(4)}/>
  <OneButton value={squares[5]} onSquareClick={() => handleClick(5)}/>
</div>
<div className="board-row">
  <OneButton value={squares[6]} onSquareClick={() => handleClick(6)}/>
  <OneButton value={squares[7]} onSquareClick={() => handleClick(7)}/>
  <OneButton value={squares[8]} onSquareClick={() => handleClick(8)}/>
</div>
 */

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default Board
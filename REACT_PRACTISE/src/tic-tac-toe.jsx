import { useState } from "react";

function Square({ value, onSquareClick, isWinningSquare }) {
  return (
    <button
      className={`square ${isWinningSquare ? "winning-square" : ""}`}
      onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, square, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(square) || square[i]) {
      return;
    }
    const nextSquare = square.slice();
    nextSquare[i] = xIsNext ? "X" : "O";
    onPlay(nextSquare);
  }

  const winner = calculateWinner(square);
  const winningLine = winner?.line || [];

  let status;
  if (winner) {
    status = "Winner: " + winner.player;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
    <h1>TIC-TAC-TOE</h1>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={square[0]}
          onSquareClick={() => handleClick(0)}
          isWinningSquare={winningLine.includes(0)}
        />
        <Square
          value={square[1]}
          onSquareClick={() => handleClick(1)}
          isWinningSquare={winningLine.includes(1)}
        />
        <Square
          value={square[2]}
          onSquareClick={() => handleClick(2)}
          isWinningSquare={winningLine.includes(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={square[3]}
          onSquareClick={() => handleClick(3)}
          isWinningSquare={winningLine.includes(3)}
        />
        <Square
          value={square[4]}
          onSquareClick={() => handleClick(4)}
          isWinningSquare={winningLine.includes(4)}
        />
        <Square
          value={square[5]}
          onSquareClick={() => handleClick(5)}
          isWinningSquare={winningLine.includes(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={square[6]}
          onSquareClick={() => handleClick(6)}
          isWinningSquare={winningLine.includes(6)}
        />
        <Square
          value={square[7]}
          onSquareClick={() => handleClick(7)}
          isWinningSquare={winningLine.includes(7)}
        />
        <Square
          value={square[8]}
          onSquareClick={() => handleClick(8)}
          isWinningSquare={winningLine.includes(8)}
        />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquare = history[currentMove];

  function handlePlay(nextSquare) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const moves = history.map((square, move) => {
    const description = move
      ? `Go to move #${move}`
      : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} square={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return { player: square[a], line: lines[i] }; // Return both player and line
    }
  }
  return null;
}

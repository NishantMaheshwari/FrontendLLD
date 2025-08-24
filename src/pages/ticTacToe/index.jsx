import React, { useState } from 'react'
import Box from './Box';

const Players = {
  A: 'X',
  B: 'O' // Fixed: was '0' (zero) instead of 'O' (letter)
}

function initializeBoard() {
  return Array.from({ length: 9 }).map(() => -1);
}

const TicTacToe = () => {
  const [board, setBoard] = useState(initializeBoard());
  const [player, setPlayer] = useState(Players.A);
  const [winner, setWinner] = useState(null);
  const boxes = Array.from(new Array(9));

  function checkLine(board, start, step, count, player) {
    for (let i = 0; i < count; i++) {
      if (board[start + i * step] !== player) return false;
    }
    return true;
  }

  const checkWinner = (index, player, board) => {
    const size = 3;
    const row = Math.floor(index / size); // Fixed: was index / 9
    const col = index % size;             // Fixed: was index % 9

    if (checkLine(board, row * size, 1, size, player)) {
      setWinner(player);
      return player;
    }

    if (checkLine(board, col, size, size, player)) {
      setWinner(player);
      return player;
    }

    if (row === col && checkLine(board, 0, size + 1, size, player)) {
      setWinner(player);
      return player;
    }

    if (row + col === size - 1 && checkLine(board, size - 1, size - 1, size, player)) {
      setWinner(player);
      return player;
    }

    if (board.every(cell => cell !== -1)) {
      setWinner('draw');
      return 'draw';
    }

    return null;
  }

  const resetGame = () => {
    setBoard(initializeBoard());
    setPlayer(Players.A);
    setWinner(null);
  }

  return (
    <div className='mt-10 w-[36vw] h-[36vw] border border-black m-auto box-content flex flex-col items-center'>
      {winner && (
        <div className='mb-4 text-2xl font-bold'>
          {winner === 'draw' ? "It's a draw!" : `Player ${winner} wins!`}
          <button onClick={resetGame} className='ml-4 px-4 py-2 bg-blue-500 text-white rounded'>
            New Game
          </button>
        </div>
      )}

      <div className='flex flex-wrap overflow-hidden'>
        {
          boxes.map((_, index) => {
            return (
              <Box
                key={index}
                player={player}
                setPlayer={setPlayer}
                Players={Players}
                filled={board[index]}
                setBoard={setBoard}
                index={index}
                checkWinner={checkWinner}
                board={board}
                winner={winner}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default TicTacToe
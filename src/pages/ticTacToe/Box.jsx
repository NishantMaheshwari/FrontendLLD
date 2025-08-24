import React, { useState } from 'react'
import './styles.css'

const Box = ({ player, setPlayer, Players, filled, setBoard, index, checkWinner, board, winner }) => {

  function handleClick() {
    // Don't allow moves if game is over or cell is filled
    if (winner || filled !== -1) return;

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    // Check for winner after updating board - pass the move details
    const gameWinner = checkWinner(index, player, newBoard);
    if (!gameWinner) {
      // Only switch player if no winner
      setPlayer(prev => {
        return prev === Players.A ? Players.B : Players.A;
      });
    }
  }

  return (
    <div className='tct-box bg-fuchsia-300 w-[12vw] h-[12vw] flex justify-center items-center font-bold text-7xl cursor-pointer'
      onClick={handleClick}>
      {(filled !== -1) && filled}
    </div>
  )
}

export default Box
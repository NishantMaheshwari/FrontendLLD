import React, { useState } from 'react';
import './styles.css';

const config = [
  [1, 0, 1],
  [1, 1, 0],
  [0, 0, 1]
];

const GridLights = () => {
  const [selectedCells, setSelectedCells] = useState(new Set());

  function getCellBgColor(xc, yc) {
    if (selectedCells.has(`${xc}-${yc}`)) return 'purple';
    if (config[xc][yc] === 1) return 'orange';
    return 'blue';
  }

  function startDeletion() {
    console.log('startDeletion called');
    const intervalId = setInterval(() => {
      setSelectedCells(prev => {
        // console.log(prev)
        if (prev.size === 0) {
          clearInterval(intervalId);
          return prev;
        }
        const newSelectedCells = new Set(prev);
        const lastElement = [...newSelectedCells][newSelectedCells.size - 1];
        newSelectedCells.delete(lastElement);
        return newSelectedCells;
      });
    }, 1000);
  }

  function handleCellClick(xc, yc) {
    if (config[xc][yc] === 0) return;

    const cellKey = `${xc}-${yc}`;
    setSelectedCells(prev => {
      if (prev.has(cellKey)) return prev;
      const newSelectedCells = new Set(prev);
      newSelectedCells.add(cellKey);

      if (newSelectedCells.size === 5) {
        startDeletion();
      }

      return newSelectedCells;
    });
  }

  return (
    <div className="grid">
      {config.map((row, yc) => (
        <div className="row" key={yc}>
          {row.map((cell, xc) => (
            <div
              key={xc}
              className="grid-cell"
              style={{ backgroundColor: getCellBgColor(xc, yc) }}
              onClick={() => handleCellClick(xc, yc)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GridLights;

import React, { useState, useRef, useEffect } from 'react'
import './styles.css'

const GRID_SIZE = 20;
const grid = Array.from({ length: GRID_SIZE }, () => Array.from({ length: GRID_SIZE }, () => ''));
const getRandomPosition = () => [Math.floor(Math.random() * GRID_SIZE), Math.floor(Math.random() * GRID_SIZE)];
const initialSnake = [[10, 10], [9, 10], [8, 10]];

const Snake = () => {
  const [snakeBody, setSnakeBody] = useState([...initialSnake]);
  const [food, setFood] = useState(getRandomPosition());
  const directionRef = useRef([1, 0]);

  function getCellClassName(xc, yc) {
    const isSnake = snakeBody.some((coord) => coord[0] == xc && coord[1] == yc);
    if (isSnake) return 'snake';
    const isFood = (xc == food[0] && yc == food[1]);
    if (isFood) return 'food';
    return '';
  }

  function touchingBoundary(xc, yc) {
    if (xc < 0 || xc >= GRID_SIZE || yc < 0 || yc >= GRID_SIZE) return true;
    return false;
  }

  function touchingBody(xc, yc) {
    return snakeBody.some(([bx,by]) => bx==xc && by==yc);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSnakeBody((prevBody) => {
        const newHead = [prevBody[0][0] + directionRef.current[0], prevBody[0][1] + directionRef.current[1]];
        if (touchingBody(newHead[0],newHead[1]) || touchingBoundary(newHead[0],newHead[1])) {
          directionRef.current = [1, 0];
          return [...initialSnake];
        }
        const newBody = prevBody.map(([x, y]) => [x, y]);
        newBody.unshift(newHead);
        if (newHead[0] == food[0] && newHead[1] == food[1]) setFood(getRandomPosition());
        else newBody.pop();
        return newBody;
      });
    }, 500);
    function handleDirectionChange(event) {
      const key = event.key;
      switch (key) {
        case 'ArrowUp': if (directionRef.current[1] != 0) return; directionRef.current = [0, -1]; break;
        case 'ArrowDown': if (directionRef.current[1] != 0) return; directionRef.current = [0, 1]; break;
        case 'ArrowLeft': if (directionRef.current[0] != 0) return; directionRef.current = [-1, 0]; break;
        case 'ArrowRight': if (directionRef.current[0] != 0) return; directionRef.current = [1, 0]; break;
        default: return;
      }
    }
    window.addEventListener('keydown', handleDirectionChange);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('keydown', handleDirectionChange);
    }
  }, [food]);

  return (
    <div className='snake-grid'>
      {grid.map((row, yc) => (
        <div className='row' key={`row-${yc}`}>
          {row.map((cell, xc) => (
            <div key={`cell-${xc}-${yc}`} className={`cell ${getCellClassName(xc, yc)}`}></div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Snake

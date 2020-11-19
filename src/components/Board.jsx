import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Square from './Square';
import Roll from './RollDice';
import BOARD_DATA from '../constants';
const Board = () => {
  const { position, setPosition } = useContext(AppContext);

  return (
    <>
      <div>
        <Roll />
      </div>
      <div className="board">
        {BOARD_DATA.sort((a, b) => {
          return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
        }).map(({ name, type }, index) => {
          return (
            <Square
              name={name}
              type={type}
              filled={position === index ? true : false}
            />
          );
        })}
      </div>
    </>
  );
};

export default Board;

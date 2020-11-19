import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Roll = () => {
  const { roll, setRoll } = useContext(AppContext);
  const rollTheDice = () => {
    setRoll(Math.floor(Math.random() * 12 + 1));
  };
  return (
    <div>
      <button onClick={rollTheDice}>Roll</button>
      <span>{roll}</span>
    </div>
  );
};

export default Roll;

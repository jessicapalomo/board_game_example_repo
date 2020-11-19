import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Players = () => {
  const { position, setPosition } = useContext(AppContext);

  return <div></div>;
};

export default Players;

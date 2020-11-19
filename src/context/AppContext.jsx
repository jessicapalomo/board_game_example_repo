import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [roll, setRoll] = useState(0);
  const [position, setPosition] = useState(0);
  const [players, setPlayers] = useState(
    { icon: '👟', position: 0 },
    { icon: '🦁', position: 0 }
  );
  const [numOfPlayers, setNum] = useState(2);
  const icons = ['🐶', '🚲', '👟', '🚢', '🧢', '🚗', '🛸', '🦁'];

  useEffect(() => {
    let newTotal = roll + position;
    setPosition(newTotal);
  }, [roll]);

  return (
    <AppContext.Provider
      value={{
        roll,
        setRoll,
        position,
        setPosition
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

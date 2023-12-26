import { createContext, useState } from "react";

export const ScoreContext = createContext(0);

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [upgradeCount, setUpgradeCount] = useState({});
  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore,
        clickValue,
        setClickValue,
        upgradeCount,
        setUpgradeCount,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

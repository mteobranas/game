import { useContext } from "react";
import { ScoreContext } from "../contexts/ScoreContext";

export default function Upgrade(props) {
  const { score, setScore, clickValue, setClickValue, upgradeCount, setUpgradeCount } =
    useContext(ScoreContext);
  const { name, cost, clickMult } = props;


  const handleClick = () => {
    if (score >= cost) {
      setScore(score - cost);
      setClickValue(clickValue + Number(clickMult));
      setUpgradeCount({...upgradeCount, [name]: (upgradeCount[name] || 0) + 1});
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center p-5 border-y-2 bg-[#739072]">
        <div className="flex flex-col">
          <span className="text-3xl text-white">{name}</span>
          <div className="flex gap-4 opacity-75">
            <span>Costo: {cost}</span>
            <span>En posesión: {upgradeCount[name] || 0}</span>
          </div>
        </div>
        <button
          className="px-4 py-2 bg-[#4F6F52] rounded text-white hover:scale-105 font-semibold"
          onClick={handleClick}
        >
          BUY
        </button>
      </div>
    </div>
  );
}

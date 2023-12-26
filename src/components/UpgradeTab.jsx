import Upgrade from "./Upgrade.jsx";

const Upgrades = [
  { name: "xd", cost: 10, clickMult: 1 },
  { name: "xd2", cost: 100, clickMult: 10 },
  { name: "xd3", cost: 1000, clickMult: 100 },
];

export default function UpgradeTab() {
  return (
    <aside className="w-[40%] h-screen border-l-4 bg-[#D2E3C8] border-white">
      <div className="flex items-center p-5 border-y-2 bg-[#4F6F52] justify-center">
        <h1 className="text-3xl text-white">FORJA MINERA</h1>
        <span></span>
      </div>
      {Upgrades.map((ug, index) => {
        return (
          <Upgrade key={index} name={ug.name} cost={ug.cost} clickMult={ug.clickMult} />
        );
      })}
    </aside>
  );
}

import Upgrade from './Upgrade.jsx'

export default function UpgradeTab() {
  return (
    <aside className="w-1/3 h-screen bg-amber-900">
      <div className="flex items-center p-5 border-y-2">
        <h1 className="text-3xl text-white">Upgrades Tab</h1>
      </div>
      <Upgrade name="Upgrade 1" cost="10" clickMult="1" />
      <Upgrade name="Upgrade 2" cost="100" clickMult="2" />
      <Upgrade name="Upgrade 3" cost="1000" clickMult="3" />
    </aside>
  )
}

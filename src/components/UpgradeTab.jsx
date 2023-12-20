import Upgrade from './Upgrade.jsx'

export default function UpgradeTab() {
  return (
    <aside className="w-1/3 h-screen bg-amber-900">
        <div className="flex justify-between items-center p-5 border-y-2">
          <h1 className="text-3xl text-white">Upgrades</h1>
          <button className="w-10 h-10 bg-blue-500 rounded text-white">1</button>
        </div>
        <Upgrade name="Upgrade 1" cost="10"/>
        <Upgrade name="Upgrade 2" cost="100"/>
        <Upgrade name="Upgrade 3" cost="1000"/>
    </aside>
  )
}
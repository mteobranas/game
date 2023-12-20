import UpgradeTab from './components/UpgradeTab.jsx'
import Main from './components/Main.jsx'

export default function App() {
  return (
    <div className="flex">
      <Main score={1} />
      <UpgradeTab />
    </div>
  )
}

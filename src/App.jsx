import UpgradeTab from './components/UpgradeTab.jsx'
import Main from './components/Main.jsx'
import { ScoreProvider } from './contexts/ScoreContext.jsx'

export default function App() {
  return (
    <ScoreProvider>
      <div className="flex">
        <Main />
        <UpgradeTab />
      </div>
    </ScoreProvider>
  )
}

import UpgradeTab from './components/UpgradeTab.jsx'
import Main from './components/Main.jsx'
import { ScoreProvider } from './contexts/ScoreContext.jsx'
 

export default function App() {
  return (
    <ScoreProvider>
      <div className={`flex    font-geist  `}>
        <Main />
        <UpgradeTab />
      </div>
    </ScoreProvider>
  )
}

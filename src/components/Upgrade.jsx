import { useContext } from 'react'
import { ScoreContext } from '../contexts/ScoreContext'

export default function Upgrade(props) {
  const { score, setScore, clickValue, setClickValue } =
    useContext(ScoreContext)
  const { name, cost, clickMult } = props

  const handleClick = () => {
    if (score >= cost) {
      setScore(score - cost)
      setClickValue(clickValue + Number(clickMult))
    }
  }

  console.log("hola")

  return (
    <div>
      <div className="flex justify-between items-center p-5 border-y-2">
        <h1 className="text-3xl text-white">{name}</h1>
        <p className="text-2xl text-white w-1/3 text-end">{cost}</p>
        <button
          className="w-20 h-10 bg-blue-500 rounded text-white"
          onClick={handleClick}
        >
          BUY
        </button>
      </div>
    </div>
  )
}

import OreCounter from './OreCounter.jsx'
import { ScoreContext } from '../contexts/ScoreContext.jsx'
import { useContext } from 'react'

export default function Main() {
  const { score, setScore, clickValue } = useContext(ScoreContext)

  const handleClick = () => {
    setScore(score + clickValue)
  }

  return (
    <div className="w-[60%] h-screen flex flex-col items-center justify-center bg-[#D2E3C8]">
      <OreCounter />
      <div
        className="w-60 h-60 rounded-full bg-red-500"
        onClick={handleClick}
      ></div>
      <p className="text-3xl">{score}</p>
    </div>
  )
}

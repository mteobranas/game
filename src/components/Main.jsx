import OreCounter from './OreCounter.jsx'

export default function Main(props) {
  return (
    <div className="w-2/3 h-screen flex flex-col items-center justify-center">
      <OreCounter />
      <div className="w-60 h-60 rounded-full bg-red-500"></div>
      <p className="text-3xl">{props.score}</p>
    </div>
  )
}
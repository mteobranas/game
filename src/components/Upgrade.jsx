export default function Upgrade(props) {
  return (
    <div>
      <div className="flex justify-between items-center p-5 border-y-2">
        <h1 className="text-3xl text-white">{props.name}</h1>
        <p className="text-2xl text-white w-1/3 text-end">{props.cost}</p>
        <button className="w-20 h-10 bg-blue-500 rounded text-white">BUY</button>
      </div>
    </div>
  )
}

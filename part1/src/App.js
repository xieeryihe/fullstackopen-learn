import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const addGood = () => setGood(good+1)
  const addNeutral = () => setNeutral(neutral+1)
  const addBad = () => setBad(bad+1)
  let average = (good - bad) / 3
  let sum = good+neutral+bad
  let positive = sum ? good/sum*100 : 0

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={addGood} text={"good"}/>
      <Button onClick={addNeutral} text={"neutral"}/>
      <Button onClick={addBad} text={"bad"}/>
      <h1>statistics</h1>
      <div>{"good"} {good}</div>
      <div>{"neutral"} {neutral}</div>
      <div>{"bad"} {bad}</div>
      <div>{"average"} {average}</div>
      <div>{"positive"} {positive}{"%"}</div>
    </div>
  )
}

export default App
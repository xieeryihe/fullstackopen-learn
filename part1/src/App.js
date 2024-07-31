import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  let total = good+neutral+bad
  let average = (good - bad) / total
  let positive = total ? good/total*100 : 0

  if(total === 0) return <div>No feedback given.</div>
  else 
    return (
    <>
      <div>{"good"} {good}</div>
      <div>{"neutral"} {neutral}</div>
      <div>{"bad"} {bad}</div>
      <div>{"total"} {total}</div>
      <div>{"average"} {average}</div>
      <div>{"positive"} {positive}{"%"}</div>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const addGood = () => setGood(good+1)
  const addNeutral = () => setNeutral(neutral+1)
  const addBad = () => setBad(bad+1)


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={addGood} text={"good"}/>
      <Button onClick={addNeutral} text={"neutral"}/>
      <Button onClick={addBad} text={"bad"}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
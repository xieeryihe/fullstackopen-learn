import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  let total = good+neutral+bad
  let average = (good - bad) / total
  let positive = total ? good/total*100 : 0

  if(total === 0) return <div>No feedback given.</div>
  else 
    return (
    <table>
      <tbody>
        <StatisticLine text={"good"} value={good}/>
        <StatisticLine text={"neutral"} value={neutral}/>
        <StatisticLine text={"bad"} value={bad}/>
        <StatisticLine text={"total"} value={total}/>
        <StatisticLine text={"average"} value={average}/>
        <StatisticLine text={"positive"} value={positive.toString()+"%"}/>
      </tbody>
    </table>
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
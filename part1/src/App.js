import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)  // 最大投票数索引
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const getAnecdote = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    setCurrentIndex(index)
  }

  // 更新最大投票数索引
  const maxVote = Math.max(...votes)
  const targetIndex = votes.indexOf(maxVote)
  if(maxIndex !== targetIndex) {
    setMaxIndex(targetIndex)
  }

  const vote = () => {
    const newVotes = [...votes]
    newVotes[currentIndex] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[currentIndex]}</div>
      <div>{`has ${votes[currentIndex]} votes.`}</div>
      <button onClick={vote}>vote</button>
      <button onClick={getAnecdote}>next anecdotes</button>
      <h1>Anecdote with the most votes</h1>
      <div>{anecdotes[maxIndex]} </div>
    </div>
  )
}

export default App
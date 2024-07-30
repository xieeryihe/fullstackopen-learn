import { useState } from 'react'

const History = ({operationList}) => {
  if (operationList.length === 0) return <div>Try to press the button.</div>
  else return <div>Operation history: {operationList.join(' ')}</div>
}

const Button = ({onClick, text}) => {return <button onClick={onClick}>{text}</button>}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [operationList, setList] = useState([])

  const handleLeftClick = () => {
    setLeft(left + 1)
    setList(operationList.concat('L'))
  }

  const handleRightClick = () => {
    setRight(right + 1)
    setList(operationList.concat('R'))
  }

  return (
    <div>
      <span style={{ width: '30px', display: 'inline-block', textAlign: 'center'}}>{left}</span>
      <Button onClick={handleLeftClick} text='left'/>
      <Button onClick={handleRightClick} text='right'/>
      <span style={{ width: '30px', display: 'inline-block', textAlign: 'center'}}>{right}</span>
      <History operationList={operationList}/>
    </div>
  )
}

export default App
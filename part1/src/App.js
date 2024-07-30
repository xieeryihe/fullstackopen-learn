import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })
  const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1})

  return (
    <div>
      <span style={{ width: '30px', display: 'inline-block', textAlign: 'center'}}>{clicks.left}</span>
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      <span style={{ width: '30px', display: 'inline-block', textAlign: 'center'}}>{clicks.right}</span>
    </div>
  )
}

export default App
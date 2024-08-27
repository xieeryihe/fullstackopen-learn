import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const targetNote = {
      id: notes.length,
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5
    }

    axios
      .post('http://localhost:3001/notes', targetNote)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')  // 清空输入栏
      })
  }

  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
      })
  }, [])

  const handleNoteChange = (event) => setNewNote(event.target.value)
  const noteToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}> show {showAll ? 'important' : 'all'} </button>
      </div>
      <ul>
        {noteToShow.map( note => <Note key={note.id} note={note} /> )}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}
export default App
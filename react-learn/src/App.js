import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    const targetNote = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random < 0.5
    }
    setNotes(notes.concat(targetNote))
    setNewNote('')  // 清空输入栏
  }

  const handleNoteChange = (event) => setNewNote(event.target.value)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map( note => <Note key={note.id} note={note} /> )}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
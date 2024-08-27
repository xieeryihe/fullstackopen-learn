import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'

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

    noteService
      .create(targetNote)
      .then(note => {
        setNotes(notes.concat(note))
        setNewNote('')  // 清空输入栏
      })
  }

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const handleNoteChange = (event) => setNewNote(event.target.value)
  const noteToShow = showAll ? notes : notes.filter(note => note.important)

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
      .then(newNote => {
        setNotes(notes.map(note => note.id !== id ? note : newNote))
      })
  }
  
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}> show {showAll ? 'important' : 'all'} </button>
      </div>
      <ul>
        {noteToShow.map( note => 
          <Note 
            key={note.id} 
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          /> )}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>&nbsp;
        <button type="submit">save</button>
      </form>
    </div>
  )
}
export default App
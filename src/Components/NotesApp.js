import { useState } from 'react';
import {nanoid} from 'nanoid';
import Header from './Header';
import Search from './Search';
import NotesList from './NotesList';

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "Here is how your note will look like!",
    date: "2/11/2022",
  }]);

  const [searchText, setSearchText] = useState('');

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className='container'>
        <Header />
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
    </div>
  )

}

export default App;
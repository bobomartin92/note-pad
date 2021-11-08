import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([])

  function handleSubmit(noteText){
    if (noteText.title !== '' || noteText.content !== '') {
      setNotes(prev => (
        [...prev,
        noteText]
      ))
    }
    
  }

  function deleteNote(id) {
    setNotes(prev => (
      notes.filter( 
        (note, index) => index !== id
      )
    ))
  }
  
  return (
    <div>
      <Header />
      <CreateArea 
        submit={handleSubmit}
      />
      {notes.map(
        (note, index) => (
          <Note 
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            delete={deleteNote}
          />
        )
      )}
      <Footer />
    </div>
  );
}

export default App;

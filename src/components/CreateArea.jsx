import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [noteText, setNoteText] = useState({
    title:'',
    content:''
  })

  function handleChange(event) {
    const {name, value} = event.target;

    setNoteText(prev => (
      {...prev,
      [name]:value}
    ))
  }

  function submitForm(event) {
      props.submit(noteText);
      setNoteText(
        {title:'',
        content:''}
      );
      event.preventDefault();
  }

  const [isExpanded, setExpaned] = useState(false)

  function expand(){
    setExpaned(true)
  }

  return (
    <div>
      <form onSubmit={submitForm} className="create-note">
        {isExpanded &&
          (<input name="title" placeholder="Title" value={noteText.title} onChange={handleChange} />)}
        <textarea onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded ? "3" : "1"} value={noteText.content} onChange={handleChange} />
        <Zoom in={isExpanded}><Fab type='submit'><AddCircleIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

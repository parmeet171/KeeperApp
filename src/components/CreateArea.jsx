import React, { useState } from "react";
import { Add } from "@material-ui/icons";
import { Fab, Zoom } from "@material-ui/core";

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true)
  }



  return (
    <form className="create-note">
      {expanded && <input
        type="text"
        value={note.title}
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />}

      <textarea
        onClick={expand}
        name="content"
        value={note.content}
        placeholder="Take a note..."
        rows={expanded ? 3 : 1}
        onChange={handleChange}
      ></textarea>
      
      <Zoom in={expanded}>
        <div>
          <Fab onClick={submitNote}>
            <Add />
          </Fab>
        </div>
      </Zoom>
    </form>
  );
};

export default CreateArea;

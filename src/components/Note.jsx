import React from 'react'
import { Delete } from '@material-ui/icons';

const Note = ({ title, content, onDelete, id}) => {

  function handleClick() {
    onDelete(id);
  }

  return (
    <section className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}><Delete /></button>
    </section>
  )
}

export default Note

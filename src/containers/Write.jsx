import React, { useState } from 'react'
import '../assets/styles/Write.css'


function Write(props) {
  const [content, setContent] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    console.log(content)
    props.history.push('/')
  }
  return (
    <div className="Write pt-5">
      <div className="Write-container pt-2">
        <form>
          <label >Titulo del post</label>
          <input type="text"
            className="form-control"
            placeholder="Pon tu titulo :)"
            onChange={(e) => setContent({ ...content, title: e.target.value })}
          />
          <label >Contenido</label>
          <textarea name="Contenido del post"
            className="form-control"
            cols="30" rows="10"
            onChange={(e) => setContent({ ...content, text: e.target.value })}
          />
          <button type="submit" className="btn btn-primary mb-2" onClick={handleSubmit}>Agregar Post</button>

        </form>
      </div>
    </div>
  )
}

export default Write;
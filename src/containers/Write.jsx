import React, { useState } from 'react'
import '../assets/styles/Write.css'
import { Editor } from '@tinymce/tinymce-react'

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
          <Editor
            apiKey="7tyhcu6axrg8z9wrrq05zh8lesujqvszc2ns25o35n0o4lri"
            init={{ /* your other settings */ }}
            onChange={(e) => setContent({ ...content, text: e.target.getContent() })
            }
          />



          <button type="submit" className="btn btn-primary mb-2" onClick={handleSubmit}>Agregar Post</button>

        </form>
      </div>
    </div>
  )
}

export default Write;
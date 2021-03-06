import React, { Fragment } from 'react';
import '../assets/styles/Main.css'
import { Link } from 'react-router-dom';

function Main() {
  return (
    <Fragment>
      <div className="Hero">
        <div className="Hero-container">
          <div className="Hero-title">
            <h1 className="Hero-title-text">El Blog para los iniciados en el <br />
            Mundo del Desarrollo del software
          </h1>
            <Link to="/posts"><button className="btn btn-primary">Ver los posts</button></Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Main;
import React from 'react'
// import {Link} from "react-router-dom";


import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
    
      
        <li className="nav-item">
          <a className="nav-link" href="#">{props.text}</a>
        </li>
       
      
      </ul>
  
  
</div>
<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input onClick={props.togglemode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" for="flexSwitchCheckDefault">Change Theme</label>
    </div>
  </div>
</nav>
  );
}



Navbar.propTypes = {
    title: PropTypes.string,  //isrequired
    text: PropTypes.string
   
}

Navbar.defaultProps={


    title: "set title here",
    text: "kch bhi"
};





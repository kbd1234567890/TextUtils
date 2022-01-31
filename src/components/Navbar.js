import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Navbar(props) {

    let colour = props.mode !== 'light'? 'light': 'dark';
    let txtColour = props.mode !== 'light'? 'dark': 'light';

  return (
    <nav className={`navbar navbar-expand-lg navbar-${txtColour} bg-${txtColour}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        {/* <a className="navbar-brand" href="#">{props.title}</a> */}

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse text-${colour}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}

            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText} </Link>
            </li>
          </ul>

            <div className="form-check form-check-inline">
                <input className="form-check-input" onChange={()=>{props.toggleMode('#FFFFFF')}} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" defaultChecked/>
                <label className="form-check-label" htmlFor="inlineRadio1" >light mode</label>
            </div>

            <div className="form-check form-check-inline">
                <input className="form-check-input" onChange={()=>{props.toggleMode('#042743')}}  type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2">blue mode</label>
            </div>

            <div className="form-check form-check-inline">
                <input className="form-check-input" onChange={()=>{props.toggleMode('#3F000F')}}  type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                <label className="form-check-label" htmlFor="inlineRadio3">Brown mode</label>
            </div>

            <div className="form-check form-check-inline">
                <input className="form-check-input" onChange={()=>{props.toggleMode('#808080')}} type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                <label className="form-check-label" htmlFor="inlineRadio4">grey mode</label>
            <div/>
        </div>

            {/* <div className={`form-check form-switch text-${colour}`}>
                <input className="form-check-input" type="checkbox" onChange={() => {props.toggleMode('#042743')}} role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div> */}
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'set title here',
    aboutText: 'About'
}

export default Navbar;

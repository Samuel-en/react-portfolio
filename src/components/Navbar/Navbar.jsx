import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [clicked, setClicked] = useState(false);
    
    const handleClick = () =>setClicked(!clicked);
    const closeMenu = ()=> setClicked(false);

    return (
        <>
        <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>Samuel Endrias</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">          
        <span class="navbar-toggler-icon"></span>
        </button>
      
        <Section className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeMenu}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink class="nav-link" href="/index" onClick={closeMenu}>About</NavLink>
            </li>
          </ul>
      </nav>
        </div>

       </>

       ) 

       export default Navbar
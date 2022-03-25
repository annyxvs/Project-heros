import React from "react";
import '../styles/header.css'
import { IoMoon } from 'react-icons/io5'
import { BiBlanket, BiHomeAlt, BiUser } from 'react-icons/bi'
import { Link } from "react-router-dom";

const CHeader = () =>{
  return(
    <div className="header">
      <div className="background"></div>
      <header>
        <div className="logo">Hero</div>
        <div className="image-hero"><IoMoon/></div>
        <div className="nav">
          <nav>
            <ul>
              <li><Link to="/" title="home"><BiHomeAlt/></Link></li>
              <li><Link to="/sinopse" title="sinopse"><BiBlanket/></Link></li>
              <li><Link to="/elenco"  title="elenco"><BiUser/></Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default CHeader;
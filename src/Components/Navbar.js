import React, { useState}from 'react'
import logo from '../assets/logoronpagina.png';
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      <Link to="/">
        <img src={logo}  alt="..."/>
        </Link>

        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/Tienda"> Catalogo </Link>
          <Link to="/about"> About </Link>
          <Link to="/login"> Login </Link>
          <Link to="/Registrar"> Registrar </Link>
          <Link to="/Compra"> compra </Link>
          <Link to="/Evento"> Eventos </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/Tienda"> Catalogo </Link>
        <Link to="/about"> About </Link>
        <Link to="/Login"> Login </Link>
        <Link to="/Registrar"> Registrar </Link>
        <Link to="/Evento"> Eventos </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
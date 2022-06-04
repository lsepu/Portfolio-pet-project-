import React from 'react'
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
        <Link to="/">About me</Link>
        <Link to="/portfolio-config">Portfolio configuration</Link>
        <Link to="/portfolio">Portfolio</Link>
    </nav>
  )
}

export default Header
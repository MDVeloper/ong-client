import React from "react";
import { Link } from "react-router-dom";
import logo from "./LOGO.png";

export default function Navbar(){

    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/noticias">Noticias</Link>
                    </li>
                    <li>
                        <Link to="/proyectos">Proyectos</Link>
                    </li>
                    <li>
                        <Link to="/log-in">Log In/Register</Link>
                    </li>
                </ul>
            </nav>
            <button>Donar</button>
            <Link to="/home"><img src={logo} alt=" "/></Link>
        </div>
    )
}
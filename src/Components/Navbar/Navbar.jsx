import React from "react";
import { Link } from "react-router-dom";
import logo from "./LOGO.png";
import styles from "./Navbar.module.css";

export default function Navbar(){

    return(
        <div className={styles.space}>
            <nav>
                <ul className={styles.navbar}>
                    <li>
                        <Link to="/aboutUs">About Us</Link>
                    </li>
                    <li>
                        <Link to="/noticias">Noticias</Link>
                    </li>
                    <li>
                        <Link to="/proyectos">Proyectos</Link>
                    </li>
                    <li>
                        <Link to="/login">Log In/Register</Link>
                    </li>
                </ul>
            </nav>
            <button className={styles.button}>Donar</button>
            <Link to="/"><img src={logo} alt=" "/></Link>
        </div>
    )
}
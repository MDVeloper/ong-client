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
            <button className={styles.button}>Donar</button>
            <Link to="/home"><img src={logo} alt=" "/></Link>
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";
import logo from "./LOGO.png";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";


export default function Navbar(){

    const active = useSelector(state => state.login.active)
    console.log(active)
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
                    
                    {!active ? 
                    <li>
                        <Link to="/login">Log In/Register</Link>
                    </li> : 
                    <li>
                        <Link to="/profile">Mi Perfil</Link>
                    </li>

                    }
                </ul>
            </nav>
            <Link to="/donaciones">
            <button className={styles.button}>Donar</button>
            </Link>
            <Link to="/"><img src={logo} alt=" "/></Link>
        </div>
    )
}
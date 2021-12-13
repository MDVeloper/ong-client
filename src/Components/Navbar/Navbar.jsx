import React from "react";
import { Link } from "react-router-dom";
import logo from "./LOGO.png";
import logo2 from "./LOGO2.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.space}>


            <Link to="/"><img src={logo} alt=" " className={styles.logo1}/></Link>
            <Link to="/"><img src={logo2} alt=" " className={styles.logo2} /></Link>
            <Link to="/donaciones">
                <button className={styles.button}>Donar</button>
            </Link>

                <div className={styles.iconMenu}>
                    <i class="fas fa-bars"></i>
                 </div>
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
                        {localStorage.getItem("token") ? <Link to="/users">Mi Perfil</Link> : <Link to="/login">Log In/Register</Link>}
                    </li>

                    {localStorage.getItem("token") ? <li>
                        <div onClick={() => {
                            localStorage.removeItem("token");
                            window.location.href = "/"
                        }}>
                            Cerrar Sesion
                        </div>
                    </li> : null}


                </ul>
            </nav>
        </div>
    )
}
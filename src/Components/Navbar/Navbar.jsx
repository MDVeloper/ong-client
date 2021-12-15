import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "./LOGO.png";
import logo2 from "./LOGO2.png";
import styles from "./Navbar.module.css";

export default function Navbar() {

    const [clicked, setClicked ] = useState(false);

    const showMenu = () => setClicked(!clicked)
 


    return (
        <div className={styles.space}>


            <Link to="/"><img src={logo} alt=" " className={styles.logo1}/></Link>
            <Link to="/"><img src={logo2} alt=" " className={styles.logo2} /></Link>

            <Link to="/donaciones">
                <button className={styles.button}>Donar</button>
            </Link>

            <nav>
                <div className={styles.iconMenu}>
                  
                      <Link to="#" onClick={showMenu}>

                       <i class="fas fa-bars"></i>
                      </Link>
                       
                 </div>

                <ul className={clicked?  styles.navbarActive : styles.navbar}>
                    <li>
                        <Link to="/aboutUs" onClick={showMenu}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/noticias" onClick={showMenu}>Noticias</Link>
                    </li>
                    <li>
                        <Link to="/proyectos" onClick={showMenu}>Proyectos</Link>
                    </li>
                    <li>
                        <Link to="/courses" onClick={showMenu}>Cursos</Link>
                    </li>
                    <li>
                        {localStorage.getItem("token") ? <Link to="/users" onClick={showMenu}>Mi Perfil</Link> : <Link to="/login" onClick={showMenu}>Log In/Register</Link>}
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
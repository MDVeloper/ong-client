import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Link } from 'react-router-dom'
import VerticalTabs from './Vertical tabs'
import style from "./UserPanel.module.css";

import image from "./image-1.png"

export default function Userpanel(props) {
    
    
    
    
    
    return(
        <div>

            <div className={style.parent}>
                <img className={style.div1} src={image} alt=" " />
                <div className={style.div2}>
                   <h1>Alisa Gomez</h1>
                   <h4>alisagomez@gmail.com</h4>
                   <h4>Argentina</h4>
                   <h4>Usuario</h4>
                </div>
                <div className={style.div3}> 
                   <h4><Link to="#">Editar mi información personal</Link></h4>
                   <h4><Link to="#">Cambiar mi contraseña</Link></h4>
                </div>
            </div>

            <VerticalTabs/>
            
            

        


    
        </div>
    )
}
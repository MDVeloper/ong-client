import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Link } from 'react-router-dom'
import VerticalTabs from './Vertical tabs'
import style from "./UserPanel.module.css";
import image from "./image-1.png"
import jwt_decode from "jwt-decode"
import axios from "axios"

export default function Userpanel({ history }) {
    const [userinfo, setuserinfo] = useState("")
    const [userid, setuserid] = useState("")
    const dispatch = useDispatch();

    if (!localStorage.getItem("token")){
        history.push('/login')
    }
    
    if (localStorage.getItem("token") && userid === ""){
        const data = localStorage.getItem("token")
        setuserid(jwt_decode(data))
    };

    const actinfo = () => {
        axios.get(`/users/detail?id=${userid.id}`)
        .then(response => setuserinfo(response.data))
    }

    if (userinfo === "" && userid.id){
        actinfo()
    }

    console.log("SOY LA INFO", userinfo)
    // TIENE QUE USAR EL ESTADO DE "USERINFO" para manejar la informacion de dicho usuario

    
    return (
        <div>

            <div className={style.parent}>
                {/* <img className={style.div1} src={image} alt=" " /> */}
                <div className={style.div2}>
                    <h1>Serafin Dericks</h1>
                    <h4>serafin.dericks@gmail.com</h4>
                    <h4>Argentina</h4>
                    <h4>Usuario</h4>
                </div>
                <div className={style.div3}>
                    <h4><Link to="#">Editar mi información personal</Link></h4>
                    <h4><Link to="#">Cambiar mi contraseña</Link></h4>
                </div>
            </div>

            <VerticalTabs />
        </div>
    )
}
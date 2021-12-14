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
import createPalette from '@mui/material/styles/createPalette'
import Loading from '../Loading/Loading'


export default function Userpanel({ history }) {
    const [userinfo, setuserinfo] = useState("")
    const [userid, setuserid] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch();

    if (!localStorage.getItem("token")) {
        window.location.href = '/login'
    }

    if (localStorage.getItem("token") && userid === "") {
        const data = localStorage.getItem("token")
        setuserid(jwt_decode(data))
    };
    // console.log("SOY EL TOKEN ", userid)

    const actinfo = () => {
        axios.get(`/users/detail?id=${userid.id}`)
            .then(response => {
                setuserinfo(response.data);
                setIsLoading(false)
            })
    }

    useEffect(() => {
        if (userinfo === "" && userid.id) {
            actinfo()
        }
      }, [JSON.stringify(userinfo)]);


    return (
        <>
            {isLoading === true ? <Loading /> : <div>
                <div className={style.parent}>
                    {/* <img className={style.div1} src={image} alt=" " /> */}
                    <div className={style.div2}>
                        <h1>{userinfo.name && userinfo.name[0].toUpperCase() + userinfo.name.slice(1) + " " + userinfo.lastName[0].toUpperCase() + userinfo.lastName.slice(1)}</h1>
                        <h4>{userinfo.email}</h4>
                        <h4>{userinfo.country && userinfo.country[0].toUpperCase() + userinfo.country.slice(1)}</h4>
                        <h4>{userinfo.privilege}</h4>
                    </div>
                    <div className={style.div3}>
                        <h4><Link to="/actualizar">Editar mi información personal</Link></h4>
                        <h4><Link to="/newpassword">Cambiar mi contraseña</Link></h4>
                        {
                            userid && userid.privilege === "Admin" ?
                                <Link to="/backoffice/form">
                                    <h4> CREAR PROYECTOS </h4>
                                </Link>
                                : null
                        }
                    </div>
                </div>

                <VerticalTabs />
            </div>}
        </>)
}
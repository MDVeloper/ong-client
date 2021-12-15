import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import jwt_decode from "jwt-decode"
import Loading from '../Loading/Loading'
import Styles from './Voluntario.module.css'
import axios from "axios"

export default function Voluntario() {
    const [userinfo, setuserinfo] = useState("")
    const [userid, setuserid] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    if (!localStorage.getItem("token")) {
        window.location.href = '/login'
    }

    if (localStorage.getItem("token") && userid === "") {
        const data = localStorage.getItem("token")
        setuserid(jwt_decode(data))
    };

    const actinfo = () => {
        axios.get(`/users/detail?id=${userid.id}`)
            .then(response => {
                setuserinfo(response.data);
                setIsLoading(false)
            })
    }

    const onchange = () => {
        axios.put(`/users/${userid.id}`, {volunteer: true})
        .then(r => {
            actinfo()
        })
    }

    useEffect(() => {
        if (userinfo === "" && userid.id) {
            actinfo()
        }
    }, [JSON.stringify(userinfo)]);

    console.log("Soy el usuaroio", userinfo)
    return (
        <>
            {isLoading === true ? <Loading /> :
                <div className={Styles.Container}>

                    <div className={Styles.volunteer}>
                        <div className={Styles.backtext}>
                            <h1 className={Styles.title}>Voluntariado</h1>
                            <div>
                                <p>El voluntariado es un conjunto de actividades de interés general, desarrolladas por personas físicas, siempre que las mismas no se realicen en virtud de una relación laboral, funcionarial, mercantil o cualquier otra retribuida y reúna los siguientes requisitos:</p>

                                <ul>
                                    <li>- Que tengan carácter altruista y solidario. </li>
                                    <li>- Que su realización sea libre, sin que tengan su causa en una obligación personal o deber jurídico. </li>
                                    <li>- Que se lleven a cabo sin contraprestación económica, sin perjuicio del derecho al reembolso de los gastos que el desempeño de la actividad voluntaria ocasione. </li>
                                    <li>- Que se desarrollen a través de organizaciones privadas o públicas y con arreglo a programas y proyectos concretos. </li>
                                </ul>

                                <h4>De una manera más resumida podríamos decir que:</h4>

                                <p>Voluntario es aquella persona que se integra de una forma libre y sin coacción en una organización sin ánimo de lucro para, de modo altruista, ayudar en diversas actividades sociales respetando y potenciando la libertad, los valores y las capacidades de las personas asistidas.</p>

                                <p>El ser voluntario significa ser diferente a los demás, porque ayudar te cambia la vida, nos hace más humano, más sensibles y más tolerantes a todo y a todos.</p>

                                <p>Podemos afirmar que, si en el mundo hubiera más voluntarios, el mundo sería en poco tiempo un lugar mejor para vivir, con más empatía, porque ayudar a otras personas de nuestro entorno o al viajar y conocer otras culturas nos olvidamos de los prejuicios y diferencias culturales y nos veríamos los unos a los otro como lo que realmente somos: humanos.</p>

                            </div>

                            {userinfo.volunteer ? <button className={Styles.btn}> ¡Ya eres voluntario! </button> : <button className={Styles.btn} onClick={() => onchange()}> Ser Voluntario </button>}

                        </div>
                    </div>

                </div>
            }
        </>
    )
}
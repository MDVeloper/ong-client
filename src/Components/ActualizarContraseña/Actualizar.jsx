import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import moment from "moment";

import { Button, TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import Styles from "./Actualizar.module.css"
import Loading from '../Loading/Loading'

import jwt_decode from "jwt-decode"
import axios from "axios"

export default function ActualizarContraseña() {
    let dispatch = useDispatch()
    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email requerido")
            .email("Correo electronico no valido")
            .max(255, "Maximo 255 caracteres"),
        password: Yup.string()
            .required("Por favor, introduzca su contraseña")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                "Debe incluir mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula y un número"
            ),
        repeatPassword: Yup.string()
            .required("Por favor, introduzca su contraseña")
            .when("password", {
                is: (password) => (password && password.length > 0 ? true : false),
                then: Yup
                    .string()
                    .oneOf([Yup.ref("password")], "La contraseña no coincide"),
            }),
        keyword: Yup.string()
            .required("Debe ingresar una palabra clave")
    });

    let [formSended, setFormSended] = useState(false);
    const [userid, setuserid] = useState("")
    const [dataactu, setdataactu] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    let messageRegister = useSelector(state => state.login.message)
    let errorRegister = useSelector(state => state.login.error)

    if (localStorage.getItem("token") && userid === "") {
        const data = localStorage.getItem("token")
        setuserid(jwt_decode(data))
    };

    const contranueva = (datos) => {
        axios.post(`/users/newpassword`, datos)
            .then(response => {
                setdataactu(response.data);
            })
    }

    useEffect(() => {
        if (dataactu === "Contraseña cambiada") {
            window.location.href = "/login";
        }
        if (dataactu === "La palabra clave no coincide") {
            alert("La palabra clave no coincide");
        }
        if (dataactu === "El email ingresado no coincide") {
            alert("El email ingresado no se encontro");
        }
    }, [JSON.stringify(dataactu)]);

    return (
        <div className={Styles.registerContainer}>
            <div className={Styles.effectBack}>

                <div className={Styles.containerFormRegister}>
                    <h1 className={Styles.titleFromRegister}>Contraseña Nueva</h1>

                    <Formik
                        initialValues={{
                            password: "",
                            repeatPassword: "",
                            email: "",
                            keyword: "",
                        }}

                        validationSchema={formSchema}

                        onSubmit={(valores, { resetForm }) => {
                            resetForm();

                            setFormSended(true);

                            console.log("Soy la info", valores)
                            contranueva(valores)

                            setTimeout(() => (setFormSended(false)), 5000);
                        }}
                    >
                        {({ errors }) => (
                            <Form >
                                <div className={Styles.formColumnGrid}>

                                    <div className={Styles.containersLabelField}>
                                        <label htmlFor="email">Email</label>
                                        <Field placeholder="Ingrese su correo electronico" type="text" id="email" name="email" />
                                        <ErrorMessage
                                            name="email"
                                            component={() => (
                                                <div style={{ color: "red", fontSize: ".85rem" }}>{errors.email}</div>
                                            )}
                                        />
                                    </div>
                                    <div className={Styles.containersLabelField}>
                                        <label htmlFor="birthday">Palabra Clave</label>
                                        <Field placeholder="Ingrese una palabra que solo usted recuerde" type="text" id="keyword" name="keyword" />
                                        <ErrorMessage
                                            name="keyword"
                                            component={() => (
                                                <div style={{ color: "red", fontSize: ".85rem" }}>{errors.keyword}</div>
                                            )}
                                        />
                                    </div>

                                    <div className={Styles.containersLabelField}>
                                        <label htmlFor="password">Nueva Contraseña</label>
                                        <Field placeholder="Ingrese su contraseña" type="password" id="password" name="password" />
                                        <ErrorMessage
                                            name="password"
                                            component={() => (
                                                <div style={{ color: "red", fontSize: ".85rem" }}>{errors.password}</div>
                                            )}
                                        />
                                    </div>

                                    <div className={Styles.containersLabelField}>
                                        <label htmlFor="repeatPassword">Confirma contraseña</label>
                                        <Field
                                            placeholder="Repita su contraseña"
                                            type="password"
                                            id="repeatPassword"
                                            name="repeatPassword"
                                        />
                                        <ErrorMessage
                                            name="repeatPassword"
                                            component={() => (
                                                <div style={{ color: "red", fontSize: ".85rem" }}>{errors.repeatPassword}</div>
                                            )}
                                        />
                                    </div>

                                </div>

                                <div className={Styles.containerButtonSended}>

                                    <Button className={Styles.buttonSendRegister} variant="contained" type="submit">Actualizar contraseña</Button>
                                    {formSended ? errorRegister ?
                                        <p style={{ color: "red" }}>{errorRegister}</p>
                                        :
                                        <p style={{ color: "green" }}>{messageRegister}</p>
                                        : ""
                                    }

                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

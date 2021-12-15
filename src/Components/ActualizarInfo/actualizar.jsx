import React, { useState } from "react";
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

export default function Actualizar() {
    let dispatch = useDispatch()

    // Validaciones Yup para Formik
    const formSchema = Yup.object().shape({
        name: Yup.string(),
        lastName: Yup.string(),
        email: Yup.string()
            .email("Correo electronico no valido")
            .max(255, "Maximo 255 caracteres"),
        birthday: Yup.string(),
        country: Yup.string(),
        state: Yup.string()
    });

    // Control del envio del from
    let [formSended, setFormSended] = useState(false);
    const [userid, setuserid] = useState("")
    const [dataactu, setdataactu] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    let messageRegister = useSelector(state => state.login.message)
    let errorRegister = useSelector(state => state.login.error)

    if (!localStorage.getItem("token")) {
        window.location.href = '/login'
    }

    if (localStorage.getItem("token") && userid === "") {
        const data = localStorage.getItem("token")
        setuserid(jwt_decode(data))
    };

    const infonueva = (datos) => {
        axios.put(`/users/${userid.id}`, datos)
            .then(response => {
                setdataactu(response.data);
                window.location.href = "/users"
            })
    }

    return (
        <>
        {/* {isLoading === true ? <Loading /> : */}
        <div className={Styles.registerContainer}>
            <div className={Styles.effectBack}>

                <div className={Styles.containerFormRegister}>
                    <h1 className={Styles.titleFromRegister}>Actualizar</h1>

                    <Formik
                        initialValues={{
                            name: "",
                            lastName: "",
                            email: "",
                            country: "",
                            state: "",
                            birthday: "",
                            volunteer: false,
                            course: false,
                        }}

                        validationSchema={formSchema}

                        onSubmit={(valores, { resetForm }) => {
                            resetForm();

                            setFormSended(true);

                            infonueva(valores)

                            setTimeout(() => (setFormSended(false)), (setIsLoading(false)), 5000);
                        }}
                    >
                        {({ errors, values }) => (
                            <Form >
                                <div className={Styles.formColumnGrid}>

                                    <div className={Styles.containersLabelField}>
                                        <label htmlFor="name">Nombre</label>
                                        <Field variant="contained" placeholder="Ingrese su nombre" type="text" name="name" id="name" />
                                        <ErrorMessage
                                            name="name"
                                            component={() => (
                                                <div style={{ color: "red", fontSize: ".85rem" }}>{errors.name}</div>
                                            )}
                                        />
                                    </div>

                                    <div className={Styles.containersLabelField}>
                                        <label htmlFor="lastName">Apellido</label>
                                        <Field placeholder="Ingrese su apellido" type="text" id="lastName" name="lastName" />
                                        <ErrorMessage
                                            name="lastName"
                                            component={() => (
                                                <div style={{ color: "red", fontSize: ".85rem" }}>{errors.lastName}</div>
                                            )}
                                        />
                                    </div>

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
                                        <label htmlFor="">Pais</label>
                                        <Field placeholder="Ingrese su pais" type="text" id="country" name="country" />
                                        <ErrorMessage
                                            name="country"
                                            component={() => (
                                                <div style={{ color: "red", fontSize: ".85rem" }}>{errors.country}</div>
                                            )}
                                        />
                                    </div>

                                    <div className={Styles.containersLabelField}>
                                        <label htmlFor="state">Provincia</label>
                                        <Field placeholder="Ingrese su provincia" type="text" id="state" name="state" />
                                        <ErrorMessage
                                            name="state"
                                            component={() => (
                                                <div style={{ color: "red", fontSize: ".85rem" }}>{errors.state}</div>
                                            )}
                                        />
                                    </div>

                                    <div className={Styles.containersLabelField}>
                                        <label htmlFor="birthday">Fecha de nacimiento</label>
                                        <Field type="date" id="birthday" name="birthday" />
                                        <ErrorMessage
                                            name="birthday"
                                            component={() => (
                                                <div style={{ color: "red", fontSize: ".85rem" }}>{errors.birthday}</div>
                                            )}
                                        />
                                    </div>

                                </div>

                                <div className={Styles.containerFromCheckBox}>
                                    <div className={Styles.containerLabelFieldCheckBox}>
                                        <label style={{ verticalAlign: "sub" }} htmlFor="">Voluntario/a</label>
                                        <Field style={{ verticalAlign: "sub" }} type="checkbox" id="volunteer" name="volunteer" />
                                    </div>

                                    <div className={Styles.containerLabelFieldCheckBox}>
                                        <label style={{ verticalAlign: "sub" }} htmlFor="">Cursos</label>
                                        <Field style={{ verticalAlign: "sub" }} type="checkbox" id="course" name="course" />
                                    </div>
                                </div>

                                <div className={Styles.containerButtonSended}>

                                    <Button className={Styles.buttonSendRegister} variant="contained" type="submit">Actualizar Datos</Button>
                                    {formSended ? errorRegister ?
                                        <p style={{ color: "red" }}>{errorRegister}</p>
                                        :
                                        <p style={{ color: "green" }}>{messageRegister}</p>
                                        : ""
                                    }
                                    <p style={{ color: "#fff", margin: "1rem 0" }}>  o  </p>

                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
        </>
    );
}
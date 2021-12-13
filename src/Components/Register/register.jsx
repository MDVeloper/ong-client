import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import moment from "moment";

import { loginRegister } from "../../Store/Actions/actionRegister";

import { Button, TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import Styles from "./register.module.css"



export default function Register() {
  let dispatch = useDispatch()

  // Validaciones Yup para Formik
  const formSchema = Yup.object().shape({
    name: Yup.string()
             .required("Nombre requerido"),
    lastName: Yup.string()
                 .required("Apellido requerido"),
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
    email: Yup.string()
              .required("Email requerido")
              .email("Correo electronico no valido")
              .max(255, "Maximo 255 caracteres"),

    birthday: Yup.string()
                 .required("Debe ingresar su fecha de nacimiento")
                 .test(
                   "DOB",
                   "Debe ser mayor de edad",
                   value => {
                     return moment().diff(moment(value), 'years') >= 18;
                   }
                 ),
    country: Yup.string()
                .required("Debe indicar su pais"),
    state: Yup.string()
              .required("Debe indicar su provincia"),
  });

  // Control del envio del from
  let [formSended, setFormSended] = useState(false);

  let messageRegister = useSelector(state => state.login.message)
  let errorRegister = useSelector(state => state.login.error)

  return (
    <div className={Styles.registerContainer}>
      <div className={Styles.effectBack}>

      <div className={Styles.containerFormRegister}>
        <h1 className={Styles.titleFromRegister}>Registrarse</h1>

        <Formik 
          initialValues={{
            name: "",
            lastName: "",
            password: "",
            repeatPassword: "",
            email: "",
            country: "",
            state: "",
            birthday: "",
            privilege: "Member",
            volunteer: false,
            course: false,
          }}
          
          validationSchema={formSchema}

          onSubmit={(valores, { resetForm }) => {
            resetForm();

            dispatch(loginRegister(valores))

            setFormSended(true);

            setTimeout(() => (setFormSended(false)), 5000);
          }}
        >
          {({ errors }) => (
            <Form >
              <div className={Styles.formColumnGrid}>

                <div className={Styles.containersLabelField}>
                  <label htmlFor="name">Nombre</label>
                  <Field variant="contained"  placeholder="Ingrese su nombre" type="text" name="name" id="name" />
                  <ErrorMessage
                    name="name"
                    component={() => (
                      <div style={{ color: "red", fontSize:".85rem" }}>{errors.name}</div>
                    )}
                  />
                </div>

                <div className={Styles.containersLabelField}>
                  <label htmlFor="lastName">Apellido</label>
                  <Field placeholder="Ingrese su apellido" type="text" id="lastName" name="lastName" />
                  <ErrorMessage
                    name="lastName"
                    component={() => (
                      <div style={{ color: "red", fontSize:".85rem" }}>{errors.lastName}</div>
                    )}
                  />
                </div>

                <div className={Styles.containersLabelField}>
                  <label htmlFor="password">Contraseña</label>
                  <Field placeholder="Ingrese su contraseña" type="password" id="password" name="password" />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div style={{ color: "red", fontSize:".85rem" }}>{errors.password}</div>
                    )}
                  />
                </div>

                <div className={Styles.containersLabelField}>
                  <label htmlFor="repeatPassword">Repetir contraseña</label>
                  <Field
                    placeholder="Repita su contraseña" 
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                  />
                  <ErrorMessage
                    name="repeatPassword"
                    component={() => (
                      <div style={{ color: "red", fontSize:".85rem" }}>{errors.repeatPassword}</div>
                    )}
                  />

                </div>

                <div className={Styles.containersLabelField}>
                  <label htmlFor="email">Email</label>
                  <Field placeholder="Ingrese su correo electronico"  type="text" id="email" name="email" />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div style={{ color: "red", fontSize:".85rem" }}>{errors.email}</div>
                    )}
                  />
                </div>

                <div className={Styles.containersLabelField}>
                  <label htmlFor="">Pais</label>
                  <Field placeholder="Ingrese su pais"  type="text" id="country" name="country" />
                  <ErrorMessage
                    name="country"
                    component={() => (
                      <div style={{ color: "red", fontSize:".85rem" }}>{errors.country}</div>
                    )}
                  />
                </div>

                <div className={Styles.containersLabelField}>
                  <label htmlFor="state">Provincia</label>
                  <Field placeholder="Ingrese su provincia" type="text" id="state" name="state" />
                  <ErrorMessage
                    name="state"
                    component={() => (
                      <div style={{ color: "red", fontSize:".85rem" }}>{errors.state}</div>
                    )}
                  />
                </div>

                <div className={Styles.containersLabelField}>
                  <label htmlFor="birthday">Fecha de nacimiento</label>
                  <Field type="date" id="birthday" name="birthday" />
                  <ErrorMessage
                    name="birthday"
                    component={() => (
                      <div style={{ color: "red", fontSize:".85rem" }}>{errors.birthday}</div>
                    )}
                    />
                </div>
                
              </div>

                <div className={Styles.containerFromCheckBox}>
                  <div className={Styles.containerLabelFieldCheckBox}>
                    <label style={{verticalAlign: "sub"}} htmlFor="">Voluntario/a</label>
                    <Field style={{verticalAlign: "sub"}} type="checkbox" id="volunteer" name="volunteer" />
                    {/* <ErrorMessage
                      name="volunteer"
                      component={() => (
                        <div style={{ color: "red", fontSize:".85rem" }}>{errors.volunteer}</div>
                      )}
                    /> */}
                  </div>

                  <div className={Styles.containerLabelFieldCheckBox}>
                    <label style={{verticalAlign: "sub"}} htmlFor="">Cursos</label>
                    <Field style={{verticalAlign: "sub"}} type="checkbox" id="course" name="course" />
                    {/* <ErrorMessage
                      name="course"
                      component={() => (
                        <div style={{ color: "red", fontSize:".85rem" }}>{errors.course}</div>
                      )}
                    /> */}
                  </div>
                </div>

                <div className={Styles.containersLabelFieldTermsAndConditions}>
                  <p>
                    Al crear una cuenta, acepta las{" "}
                    <Link to="/terminosYCondiciones" style={{color:"#2EC4B6"}}>
                      <b>Condiciones de uso</b>
                    </Link>{" "}
                    y el{" "}
                    <Link to="/terminosYCondiciones" style={{color:"#2EC4B6"}}>
                      <b>Aviso de privacidad </b>
                    </Link>{" "}
                    de Coding To Heap.
                  </p>
                </div>

                <div className={Styles.containerButtonSended}>
                  
                  <Button className={Styles.buttonSendRegister} variant="contained"  type="submit">Registrar cuenta</Button>
                  { formSended ?  errorRegister ?
                    <p style={{ color: "red" }}>{errorRegister}</p>
                    :
                    <p style={{ color: "green" }}>{messageRegister}</p>
                    : ""
                  }
                  <p style={{color:"#fff", margin:"1rem 0"}}>  o  </p>

                  <button className={Styles.containerIcon}>
                    <FcGoogle style={{fontSize:"2rem"}}/>
                    <p>Registrate con google</p>
                  </button>

                </div>
                
            </Form>
          )}
        </Formik>
      </div>
        

      </div>
    </div>
  );
}

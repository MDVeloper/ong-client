import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { startSesion } from "../../Store/Actions/actionLogin";
import { Button, Input } from "@mui/material";
import Styles from "./Login.module.css"
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";


const validation = (value) => {
  const errors = {};
  if (!value.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
    errors.email = "Email is not valid";
  }
  if (!value.password) {
    errors.password = "Password is required";
  } else if (value.password.length < 5) {
    errors.password = "Password must have 5 characters";
  }
  return errors;
};

export default function Login() {

  const userOn = useSelector((state) => state.login.active);
  const error = useSelector((state) => state.login.error);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
  }, [userOn]);

  const handleSubmit = (value, { setSubmitting }) => {
    setSubmitting(false);
    dispatch(startSesion(value));
    // Se comento porque apenas se logeaba lo redirigia y no le daba tiempo a generar el token!!
    // dispatch(history.push('/users'))
  };


  return (
    !userOn && (
      // Contenedor principal de todo el componente
      <div className={Styles.containerFromLogin}>
        {/* Segundo contenedor para darle el efecto negro transparente */}
        <div className={Styles.effectBack}>
          {/* Tercer contenedor para el formulario y los elementos de este mas efecto negro */}
          <div className={Styles.containerFromFormAndFormItems}>

            <h1 className={Styles.titleLogin}>Ingresa a tu cuenta</h1>

            <Formik
              initialValues={{ email: "", password: "" }}
              validate={validation}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, isValid }) => (
                <Form>

                  <div className={Styles.containersLabelField}>
                    <label>Email</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Ingrese su correo electronico"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={Styles.errors}
                    />
                  </div>

                  <div className={Styles.containersLabelField}>
                    <label>Password</label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Ingrese su contraseña"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className={Styles.errors}
                    />
                  </div>

                  <div className={Styles.containerButtonSend}>

                    <Button variant="contained" type="submit" className={Styles.buttonSendRegister}>
                      Ingresar
                    </Button>

                    <p style={{ color: "#fff", margin: "1rem 0" }}> o </p>


                    <button className={Styles.containerIcon} >
                      <FcGoogle style={{ fontSize: "2rem" }} />
                      <p>Ingresar con google</p>
                    </button>


                    <p style={{ color: "#fff", marginTop: "1rem" }}>Si todavia no tenes tu cuenta puedes<Link style={{ color: "#2EC4B6" }} to="/register"> <b>registrarte aqui</b> </Link> </p>

                  </div>
                </Form>
              )}
            </Formik>

          </div>
        </div>
      </div>
    )
  );
}

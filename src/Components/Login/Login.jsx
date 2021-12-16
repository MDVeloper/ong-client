import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { startSesion } from "../../Store/Actions/actionLogin";
import { Button, Input } from "@mui/material";
import Styles from "./Login.module.css"
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios"


const validation = (value) => {
  const errors = {};
  if (!value.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {

    errors.email = "Email is not valid";
  }

  if (!value.password) {
    errors.password = "Password is required";
  }  else if (!/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/i.test(value.password)) {

    errors.password = "La contraseña no coincide";
  }

  return errors;
};

export default function Login() {
  const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  // const HOST_KEY_IZI = "6LeBD5sdAAAAALHeT_1mXuoBeWcgXsXhl5FNYJTw";
  // const LOCAL_HOST_KEY = "6LeBD5sdAAAAAP7hM3JryC8L0QBgxwJvWIX0DMOm"

  const userOn = useSelector((state) => state.login.active);
  const error = useSelector((state) => state.login.error);


  const reCaptchaRef = React.createRef()
  const dispatch = useDispatch();

  const [captcha, setcaptcha] = useState("")

  useEffect(() => {

  }, [userOn]);


  const handleSubmit = (value, { setSubmitting }) => {
    if (captcha) {
      setSubmitting(false);
      dispatch(startSesion(value));
    }
    else {
      alert("Falta el captcha")
    }
  };

  function onChange(value) {
    setcaptcha(value)
  }

  const googleOnClick = () => {
    return axios.get("/users/google")
      .then(response => {
        // localStorage.setItem("token", JSON.stringify(reponse.data.token))
        console.log(response)
      })
  }

  const onSubmit = () => {
    const recaptchaValue = reCaptchaRef.current.getValue();
    this.props.onSubmit(recaptchaValue);
  }

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
                    {error === "Usuario no encontrado" ? <p style={{ color: "red" }}> Usuario no encontrado </p> : null}


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
                    {error === "Contraseña no encontrada" ? <p style={{ color: "red" }}> Contraseña no valida </p> : null}
                  </div>
                  <form style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }} onSubmit={onSubmit} >
                    <ReCAPTCHA
                      ref={reCaptchaRef}
                      sitekey={TEST_SITE_KEY}
                      onChange={onChange}
                    />
                  </form>
                  <div className={Styles.containerButtonSend}>

                    <Button variant="contained" type="submit" className={Styles.buttonSendRegister}>
                      Ingresar
                    </Button>

                    <p style={{ color: "#fff", margin: "1rem 0" }}></p>

                    

                    <p style={{ color: "#fff", marginTop: "1rem" }}>Si todavia no tenes tu cuenta puedes<Link style={{ color: "#2EC4B6" }} to="/register"> <b>registrarte aquí</b> </Link> </p>

                    <p style={{ color: "#fff", marginTop: "1rem" }}>Olvidaste tu contraseña?<Link style={{ color: "#2EC4B6" }} to="/newpassword"> <b>cambiala aquí</b> </Link> </p>
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

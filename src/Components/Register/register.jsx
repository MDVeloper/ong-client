import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Styles from "./register.module.css";
import { linkClasses } from "@mui/material";
import { Link } from "react-router-dom";

export default function Register() {
  const formSchema = Yup.object().shape({
    name: Yup.string().required("Nombre requerido"),

    lastName: Yup.string().required("Apellido requerido"),

    password: Yup.string()
      .min(5, "Minimo 5 caracteres")
      .max(25, "Maximo 25 caracteres")
      .required("Contraseña requerida"),

    repeatPassword: Yup.string()
      .min(5, "Minimo 5 caracteres")
      .max(25, "Maximo 25 caracteres")
      .required("Contraseña requerida"),

    email: Yup.string()
      .required("Email requerido")
      .email("Correo electronico requerido")
      .max(255, "Maximo 255 caracteres"),
  });

  let [formSended, setFormSended] = useState(false);

  return (
    <div className={Styles.container}>
      <h1>Registrarse</h1>

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
          privilege: "member",
          volunteer: false,
          course: false,
          termsAndConditions: false
        }}
        validationSchema={formSchema}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado:", valores);

          setFormSended(true);
          setTimeout(() => setFormSended(false), 3000);
        }}
      >
        {({ errors }) => (
          <Form>
            <div>
              <label htmlFor="name">Nombre</label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage
                name="name"
                component={() => (
                  <div style={{ color: "red" }}>{errors.name}</div>
                )}
              />
            </div>

            <div>
              <label htmlFor="lastName">Apellido</label>
              <Field type="text" id="lastName" name="lastName" />
              <ErrorMessage
                name="lastName"
                component={() => (
                  <div style={{ color: "red" }}>{errors.lastName}</div>
                )}
              />
            </div>

            <div>
              <label htmlFor="password">Contraseña</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage
                name="password"
                component={() => (
                  <div style={{ color: "red" }}>{errors.password}</div>
                )}
              />
            </div>

            <div>
              <label htmlFor="repeatPassword">Repetir contraseña</label>
              <Field
                type="password"
                id="repeatPassword"
                name="repeatPassword"
              />
              <ErrorMessage
                name="repeatPassword"
                component={() => (
                  <div style={{ color: "red" }}>{errors.repeatPassword}</div>
                )}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage
                name="email"
                component={() => (
                  <div style={{ color: "red" }}>{errors.email}</div>
                )}
              />
            </div>

            <div>
              <label htmlFor="">Pais</label>
              <Field type="text" id="country" name="country" />
              <ErrorMessage
                name="country"
                component={() => (
                  <div style={{ color: "red" }}>{errors.country}</div>
                )}
              />
            </div>

            <div>
              <label htmlFor="state">Provincia</label>
              <Field type="text" id="state" name="state" />
              <ErrorMessage
                name="state"
                component={() => (
                  <div style={{ color: "red" }}>{errors.state}</div>
                )}
              />
            </div>

            <div>
              <label htmlFor="birthday">Cumpleaños</label>
              <Field type="date" id="birthday" name="birthday" />
              <ErrorMessage
                name="birthday"
                component={() => (
                  <div style={{ color: "red" }}>{errors.birthday}</div>
                )}
              />
            </div>

            <div>
              <label htmlFor="">Voluntario/a</label>
              <Field type="checkbox" id="volunteer" name="volunteer" />
              <ErrorMessage
                name="birthday"
                component={() => (
                  <div style={{ color: "red" }}>{errors.birthday}</div>
                )}
              />
            </div>

            <div>
              <label htmlFor="">Cursos</label>
              <Field type="checkbox" id="course" name="course" />
              <ErrorMessage
                name="course"
                component={() => (
                  <div style={{ color: "red" }}>{errors.course}</div>
                )}
              />
            </div>

            <div>
              
                <p>Al crear una cuenta, acepta las <Link to="/terminosYCondiciones"><b>Condiciones de uso</b></Link> y el <Link to="/terminosYCondiciones"><b>Aviso de privacidad </b></Link> de Coding To Heap.</p>
              
            
              <ErrorMessage
                name="termsAndConditions"
                component={() => (
                  <div style={{ color: "red" }}>{errors.termsAndConditions}</div>
                )}
              />
            </div>

            <button type="submit">Enviar</button>
            {formSended && (
              <p style={{ color: "green" }}>Formulario enviado con exito</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

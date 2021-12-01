import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import moment from "moment";
import { loginRegister } from "../../Store/Actions/actionRegister";
import { useSelector } from "react-redux";



export default function Register() {
  let dispatch = useDispatch()

  // Validaciones Yup para Formik
  const formSchema = Yup.object().shape({
    name: Yup.string().required("Nombre requerido"),

    lastName: Yup.string().required("Apellido requerido"),

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

    country: Yup.string().required("Debe indicar su pais"),

    state: Yup.string().required("Debe indicar su provincia"),
  });

  // Control del envio del from
  let [formSended, setFormSended] = useState(false);

  let responseRegister = useSelector(state => state.login.error)

  return (
    <>
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
          privilege: "Member",
          volunteer: false,
          course: false,
        }}
        
        validationSchema={formSchema}

        onSubmit={(valores, { resetForm }) => {
          resetForm();

          dispatch(loginRegister(valores))

          console.log("Formulario enviado:", valores);

          setFormSended(true);

          setTimeout(() => (setFormSended(false)), 5000);
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
              <label htmlFor="birthday">Fecha de nacimiento</label>
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
              {/* <ErrorMessage
                name="volunteer"
                component={() => (
                  <div style={{ color: "red" }}>{errors.volunteer}</div>
                )}
              /> */}
            </div>

            <div>
              <label htmlFor="">Cursos</label>
              <Field type="checkbox" id="course" name="course" />
              {/* <ErrorMessage
                name="course"
                component={() => (
                  <div style={{ color: "red" }}>{errors.course}</div>
                )}
              /> */}
            </div>

            <div>
              <p>
                Al crear una cuenta, acepta las{" "}
                <Link to="/terminosYCondiciones">
                  <b>Condiciones de uso</b>
                </Link>{" "}
                y el{" "}
                <Link to="/terminosYCondiciones">
                  <b>Aviso de privacidad </b>
                </Link>{" "}
                de Coding To Heap.
              </p>
            </div>

            <button type="submit">Enviar</button>
            {formSended && (
              <p style={{ color: "green" }}>{responseRegister}</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}

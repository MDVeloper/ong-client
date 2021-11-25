import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Styles from "./register.module.css";
import { loginRegister } from "../../Store/Actions/actionRegister";

export default function Register() {
  const validationSchema = Yup.object({
    name: Yup.string().required(),
  });

  let dispatch = useDispatch();

  let [input, setInput] = useState({
    name: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    email: "",
    coutry: "",
    state: "",
    birthday: "",
    privilege: "member",
    volunteer: false,
    course: false,
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleBox = (e) => {
    let checked = e.target.checked;

    if (checked) {
      setInput({
        ...input,
        volunteer: true,
      });
    }
  };

  const handleBox2 = (e) => {
    let checked = e.target.checked;

    if (checked) {
      setInput({
        ...input,
        course: true,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(loginRegister(input));
    console.log("Datos de registro: ", input);

    setInput({
      name: "",
      lastName: "",
      password: "",
      repeatPassword: "",
      email: "",
      coutry: "",
      state: "",
      birthday: "",
      privilege: "member",
      volunteer: false,
      course: false,
    });
  };

  return (
    <div className={Styles.container}>
      <h1>Register Individual Account!</h1>

      <div>
        <form onSubmit={handleSubmit} >
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          <label>Last name</label>
          <input
            type="text"
            name="lastName"
            value={input.lastName}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />

          <label>Password repeat</label>
          <input
            type="password"
            name="repeatPassword"
            value={input.repeatPassword}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={handleChange}
          />

          <label>Coutry</label>
          <input
            type="text"
            name="coutry"
            value={input.coutry}
            onChange={handleChange}
          />
          <label>State</label>
          <input
            type="text"
            name="state"
            value={input.state}
            onChange={handleChange}
          />

          <label>Birthday</label>
          <input
            type="date"
            name="birthday"
            value={input.birthday}
            onChange={handleChange}
          />

          <label>Volunteer</label>
          <input
            type="checkbox"
            name="volunteer"
            value={input.volunteer}
            onChange={handleBox}
          />

          <label>Course</label>
          <input
            type="checkbox"
            name="course"
            value={input.course}
            onChange={handleBox2}
          />

          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

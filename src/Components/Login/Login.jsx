import React from 'react';
import { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../Error/Error'
import { startSesion } from '../../Store/Actions/actionLogin';
import { useHistory } from 'react-router';
import GoogleValidation from '../Boton google/Validation Google';

export default function Login() {
    const userOn = useSelector((state) => state.active);
    const error = useSelector((state) => state.error);
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        if(userOn){
            history.push('/home');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userOn]);

    const validation = (value) => {
        const errors = {};
        if (!value.email){
            errors.email= "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)){
            errors.email= "Email is not valid";
        };
        if (!value.password){
            errors.password = "Password is required";
        } else if (value.password.length < 5) {
            errors.password = "Password must have 5 characters";
          }
          return errors;
    };

    const handleSubmit = (value, {setSubmitting}) =>{
        setSubmitting(false);
        dispatch(startSesion(value));
        history.push('/home')
    }

    return (
        !userOn && (
            <div className="container" >
                <h1 className="text-black mt-3">Login Account</h1>
                {error && <Error error={error}/>}
                <Formik
                initialValues={{email:'', password:''}}
                validate={validation}
                onSubmit={handleSubmit}
                >
                    {({ isSubmitting, isValid }) => (
                        <Form className="form-group">
                        <div className="mt-4">
                            <span className="text-white">Email:</span>
                            <Field
                            type="email"
                            name="email"
                            className="form-control col-sm-5"
                            placeholder="your email"
                            />
                            <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                            />
                            <div className="mt-3">
                            <span className="text-white ">Password:</span>
                            <Field
                                type="password"
                                name="password"
                                className="form-control col-sm-5 "
                                placeholder="your password"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-danger"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting||!isValid}
                                className="btn btn-primary mt-3"
                            >
                                Submit
                            </button>
                            </div>
                        </div>
                        </Form>
                    )}
                </Formik>
                <GoogleValidation/> //Lo sumé aca
            </div>
        )
    )
}

import React from 'react'
import { Route, Redirect } from 'react-router'


function PrivateRoute(props) {

    const user = JSON.parse(sessionStorage.getItem('token'))
    
    if (user === null) return <Redirect to="/" />

    return (
        <Route  {...props}/>
    )
}

export default PrivateRoute;
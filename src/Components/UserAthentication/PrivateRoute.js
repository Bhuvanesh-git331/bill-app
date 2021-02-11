import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute= ({component: Component, ...rest})=> {
    return (
        <Route  
        {...rest}
        render={(props)=> {
            if(JSON.parse(localStorage.getItem('token'))) {
                return <Component {...props}/>
            } else {
                return (
                    <Redirect 
                    to={{
                        pathname: '/login'
                    }}
                    />
                )
            }
        }}
        />
    )
}

export default PrivateRoute
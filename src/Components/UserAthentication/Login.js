import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import swal from 'sweetalert'
import validator from 'validator'
import {startLoginData} from '../../Action/usersAction'


const Login=(props)=> {
    const {handleAuth, message}= props
    const [loginData, setLoginData]= useState({email:'', password:''})
    const [formErrors, setFormErrors]= useState({})
    const errors={}

    const dispatch=useDispatch()

    const handleChange=(e)=> {
       setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    const runValidation=()=> {
        if(loginData.email.trim().length===0) {
            errors.email='email cannot be blank'
        } else if(!validator.isEmail(loginData.email)) {
            errors.email='invalid email format'
        }
        if(loginData.password.trim().length===0) {
            errors.password='password cannot be blank'
        }
    }

    const handleSubmit=(e)=> {
       e.preventDefault()

       runValidation()

       if(Object.keys(errors).length===0) {
           setFormErrors({})

        //    const handleDirect=()=> {
        //        props.history.push('/login')
        //    }

           const handleRedirect=()=> {
               props.history.push('/')
               swal('You have succesfully logged In')
           }

         dispatch(startLoginData(loginData, handleRedirect))
         
         setLoginData({email:'', password:''})
        
        props.handleAuth()
       } else {
           setFormErrors(errors) 
       }
    }

    const handleCancel=()=> {
        setFormErrors({})
        props.history.push('/login')
        setLoginData({email:'', password:''})
    }


    return (
        
        <div className='loginform'>

            <br />  <br /> <br />
            <form onSubmit={handleSubmit}>
            <h2>Login to your Account</h2>
            
            <div className='loginmessage'>
            <p>{message}</p>
            </div>
          
            
            <input type='text' 
            id='email'
            name='email'
            value={loginData.email}
            onChange={handleChange}
            placeholder='Enter email'/> <br />
            {formErrors.email && <span style={{color:'red'}}>{formErrors.email}</span>} <br />

           <input type='password' 
            id='password'
            name='password'
            value={loginData.password}
            onChange={handleChange}
            placeholder='Enter password'/> <br />
            {formErrors.password && <span style={{color:'red'}}>{formErrors.password}</span>} <br />

            <input type='submit' value='Login'/> {' '}

            <input type='button' value='cancel' onClick={handleCancel}/>

            </form>

            

        </div>
    )
}

export default Login
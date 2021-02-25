import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {Button} from '@material-ui/core'
import {startUserRegister} from '../../Action/usersAction'
import validator from 'validator'
import swal from 'sweetalert'
import '../../App.css'


const Register=(props)=> {
    const {handleMessage}= props
    const [formData, setFormData]= useState({username:'', email:'', password:'', businessName:'', address:''})  
    const [formErrors,setFormErrors]= useState({})
    const [isLOggedIn, setIsLoggedIn]= useState(false)
    const errors={}

    const dispatch=useDispatch()    


    const handleChange=(e)=> {
        setFormData({...formData, [e.target.name]: e.target.value})    
    }

    const runValidation=()=> {
        if(formData.username.trim().length===0) {
            errors.username='username cannot be blank'
        }
        if(formData.email.trim().length===0) {
            errors.email='email cannot be blank'
        } else if(!validator.isEmail(formData.email)) {
            errors.email='invalid format'
        }
        if(formData.password.length===0) {
            errors.password='please enter the password'
      } else if(formData.password.length<8) {
           errors.password='password length should b greater than 8 characters'
      } else if(formData.password.length>128) {
          errors.password='password length shoul be les than 128 characters'
      }
      if(formData.businessName.trim().length===0) {
        errors.businessName='businessName cannot be blank'
    }
    if(formData.address.trim().length===0) {
        errors.address='address cannot be blank'
    }
    }


    const handleSubmit=(e)=> {
        e.preventDefault()

        runValidation()

        if(Object.keys(errors).length===0) {
            setFormErrors({})
           
            const handleRedirect=()=> {
                props.history.push('/login')
                swal ('Successfully created the account')
            }

            dispatch(startUserRegister(formData, handleRedirect))
            setFormData({username:'', email:'', password:'', businessName:'', address:''})
            handleMessage(`Congrats ${formData.username} you have successfully created the account`)
                
        } else {
            setFormErrors(errors)
        }
    }

    const handleCancel=()=> {
        setFormErrors({})
       props.history.push('/register')
    }

    return (
        <div>
<br />
            <h2 style={{textAlign:'center'}}>Register with Us</h2>
            <br />

           <div style={{textAlign:'center'}}>
           <form onSubmit={handleSubmit}>
          <input type='text' 
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Enter username'/>  <br />
          {formErrors.username && <span style={{color:'red'}}>{formErrors.username}</span>} <br />

         
          <input type='text' 
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter email'/>  <br />
           {formErrors.email && <span style={{color:'red'}}>{formErrors.email}</span>} <br />

        
         <input type='password' 
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Enter password'/> <br />
           {formErrors.password && <span style={{color:'red'}}>{formErrors.password}</span>} <br />

        
           <input type='text' 
          id='businessName'
          name='businessName'
          value={formData.businessName}
          onChange={handleChange}
          placeholder='Enter businessName'/> <br />
           {formErrors.password && <span style={{color:'red'}}>{formErrors.password}</span>} <br />


           <textarea
           type='text'
           id='address'
           name='address'
           value={formData.address}
           onChange={handleChange}
           placeholder='Enter address here '> <br />
          {formErrors.address && <span style={{color:'red'}}>{formErrors.address}</span>} <br />
           </textarea> <br />

           {formErrors.password && <span style={{color:'red'}}>{formErrors.password}</span>} <br />

          <Button type='submit' variant='contained' color='primary'>Register</Button> {'  '} 

          <Button type='button' variant='contained' color='secondary' onClick={handleCancel}>Cancel</Button>

           </form>

           </div>

        </div>
    )
}

export default Register
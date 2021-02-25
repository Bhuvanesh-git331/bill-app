import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {  TextField, Button } from '@material-ui/core'
import validator from 'validator'
import { startCustomersData,startEditCustomer} from '../../Action/customersAction'




const CustomersForm=(props)=> {
  const {id, name:cusName, email:cusEmail, mobile:cusMobile, toggle }= props
    const [customersData, setCustomersData]= useState({
      name:cusName? cusName:  '', 
      mobile:cusMobile ? cusMobile:'', 
      email:cusEmail? cusEmail:''
    })
    const [formErros, setFormErrors]= useState({})
    const errors={}

    const dispatch=useDispatch() 

    const tokenValue=JSON.parse(localStorage.getItem('token'))

    const handleChange=(e)=> {
      setCustomersData({...customersData, [e.target.name]: e.target.value})  
  }  

    const runValidation=()=> {
      //name validation
      if(customersData.name.length===0) {
        errors.name='name cannot be blank'
      }
      //email validation
      if (customersData.email.length===0) {
        errors.email = "email can't be empty";
      } else  if(!validator.isEmail(customersData.email)) {
        errors.email = "invalid email formate";
      }
      //mobile validation
      if (customersData.mobile.length===0) {
        errors.mobile = "mobile can't be empty";
      } else if (!/^\d+$/.test(customersData.mobile)) {
        errors.mobile = "mobile number contains only digit";
      }
    } 

    const handleSubmit=(e)=> {
        e.preventDefault()

        runValidation()
     if(Object.keys(errors).length===0) {
       setFormErrors({})
       if(id) {
        dispatch(startEditCustomer(customersData, id, toggle, tokenValue))
       } else {
         dispatch(startCustomersData(customersData, tokenValue))
         setCustomersData({name:'', mobile:'', email:''})
       }
     } else {
       setFormErrors(errors)
     }
       
    }

    const handleCancel=(e)=> {
        setCustomersData({name:'', mobile:'', email:''})
    }

    return (
        <div className='customersformbody'>
 
          <div >

          <form onSubmit={handleSubmit}>
              
              <TextField 
              variant="outlined"
              label='name'
              name='name'
              value={customersData.name}
              onChange={handleChange}
              style={{width:'90%'}}/> <br /> 
         {formErros.name && <span style={{color:'red'}}>{formErros.name}</span> }  <br />    

           
            <TextField 
              variant="outlined"
              label='mobile'
              name='mobile'
              value={customersData.mobile}
              onChange={handleChange}
              style={{width:'90%'}}/> <br /> 
              {formErros.mobile && <span style={{color:'red'}}>{formErros.mobile}</span> }   <br />  
            
           
              <TextField 
              variant="outlined"
              label='email'
              name='email'
              value={customersData.email}
              onChange={handleChange}
              style={{width:'90%'}}/> <br /> 
                 {formErros.email && <span style={{color:'red'}}>{formErros.email}</span> } <br /> 

                 <Button 
                type="submit"
                variant="contained"
                // style={{marginLeft: '3px'}}
                        color="primary"
                    > {
                      id ? 'Update Customer' : 'Add Customer'
                    }</Button>{' '}
                    
                          <Button
                            type="button"
                            variant="contained"
                            // style={{marginLeft: '10px'}} 
                            color="secondary"                             
                            onClick={handleCancel}
                        >
                        Cancel
                    </Button>
          </form>

          </div>
          
          </div>

        
    )
}

export default CustomersForm
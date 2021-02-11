import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
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
              <label><b>Name</b></label> <br />
              <input 
              type='text'
              id='name'
              name='name'
              className="input"
              value={customersData.name}
              onChange={handleChange}/> <br /> <br />
         {formErros.name && <span style={{color:'red'}}>{formErros.name}</span> }  <br />    

           <label><b>Mobile</b></label>  <br />
            <input 
              type='text'
              id='mobile'
              name='mobile'
              className="input"
              value={customersData.mobile}
              onChange={handleChange}/> <br /> <br />
              {formErros.mobile && <span style={{color:'red'}}>{formErros.mobile}</span> }   <br />  
            
            <label><b>Email</b></label>  <br /> 
              <input 
              type='text'
              id='email'
              name='email'
              className="input"
              value={customersData.email}
              onChange={handleChange}/> <br /> <br />
                 {formErros.email && <span style={{color:'red'}}>{formErros.email}</span> } <br /> 

              <input 
              type='submit' 
              value='save'
              /> {' '}

              <input 
              type='button'
              value='cancel'
              onClick={handleCancel}/>
          </form>

          </div>
          
          </div>

        
    )
}

export default CustomersForm
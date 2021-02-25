import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {Button} from '@material-ui/core'
import {startRemoveCustomersData} from '../../Action/customersAction'
import EditCustomers from './editCustomers'


const CustomersList=(props)=> {
    const{_id, name, email, mobile, createdAt}= props
    const[editCustomer, setEditCustomer]= useState(false)
    const [open, setOpen]= useState(false)

    const toggle=()=> {
        setOpen(false)
    }

    const dispatch=useDispatch()

    const tokenValue=JSON.parse(localStorage.getItem('token'))
  
    const handleRemove=(id)=> {
        console.log('remove', id)
       
       dispatch(startRemoveCustomersData(id,tokenValue))
    }

    const handleEdit=(id)=> {
        console.log(id)
       setEditCustomer(!editCustomer)
       setOpen(true)
    }

    return (
        <div className='customer_card'>   

        <div className='user_name'>
          <b>Name:{name}</b>
        </div>

       <div className='email_profile'>
       <b>Eamil: {email}</b>
       </div>

        <div className="mobile">
        <b>Mobile - {mobile}</b>
      </div>  

      <div className='date'>
          Date- {createdAt && createdAt.slice(0,createdAt.indexOf("T")).split("-").join("/")}
      </div>

      <Button variant='contained' color='primary' onClick={()=>handleRemove(_id) }>Delete</Button>  {' '}
      <Button variant='contained' color='secondary' onClick={()=>handleEdit(_id)}>Edit</Button> <br />


    {
        editCustomer && (
            <EditCustomers 
             id={_id}
             name={name}
             email={email}
             mobile={mobile}
             open={open}
             toggle={toggle}/>
        )
    }               
        </div>
    )
       
}


export default CustomersList
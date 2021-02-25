import React, {useEffect} from 'react' 
import CustomersForm from './customerForm'
import CustomersList from './customersList'
import {useSelector, useDispatch} from 'react-redux'
import { startGetCustomerData } from '../../Action/customersAction'
import '../../index.css'


const CustomerContainer=(props)=> {
   
    const users= useSelector(state=> state.customers)
    const dispatch=useDispatch()

    const tokenValue= JSON.parse(localStorage.getItem('token'))

    useEffect(()=> {
        dispatch(startGetCustomerData(tokenValue))
    }, [])

    
    
    return (
    <div className='customercontainer'>

<h2 style={{fontFamily:'cursive'}}>Input your Customers details here</h2>

        

   <div className='form_container'>
    <CustomersForm /> 
    </div>

    <div className="display_customer_card">
        {
           users.length===0 ? (
               <h2>No customers found</h2>
           ) : (
               <div>
                {
                    users.map((user)=> {
                        return <CustomersList key={user._id} {...user}/>
                    })
                } 
               </div>
           )
        }
    </div>

    </div>
    )
}

export default CustomerContainer

import React, {useState} from 'react'
import { TextField } from "@material-ui/core"
import {useSelector, useDispatch} from 'react-redux'
import ProductSelect from './productSelect'
import ShowAddedProduct from './showAddedProduct'
import swal from 'sweetalert'
import {startCreateBill} from '../../Action/billAction'
import BillDisplay from './billDisplay'
import '../../index.css'

const BillContainer=(props)=> {
    const dispatch= useDispatch()
    const [startDate, setStartDate]= useState(localStorage.getItem('date') ? localStorage.getItem('date') : '')
    const [customerId, setCustomerId]= useState(localStorage.getItem('id')? localStorage.getItem('id') : '')
    const [billDisplay, setBillDisplay]= useState(false)
    const customers = useSelector((state) => state.customers) 
    const lineItems= useSelector((state)=> state.lineItem)
    const tokenValue= JSON.parse(localStorage.getItem('token')) 

    console.log('billcontainer', lineItems)

    const handleDate=(e)=> {
        setStartDate(e.target.value)
        localStorage.setItem('date', e.target.value) 
    }

    const handleCustomer = (e) => {
        setCustomerId(e.target.value);
        localStorage.setItem('id', e.target.value)
      }

      const billGenerate=()=> {
          if(startDate.length>0 && customerId.length>0 && lineItems.length>0) {
              const data= {
                  date: startDate,
                  customer: customerId,
                  lineItems:lineItems
              }
              dispatch(startCreateBill(data, tokenValue))
              setStartDate('')
              setCustomerId('')
              setBillDisplay(true)
          } else {
           swal('something, went wrong')
          }

      }

    return (
        <div className='bill_container'>

        <div className='bill_header'>
        <h2>Billing</h2> 
        </div> <br />

        <div className='date_picker'>
            <h3>Select Date</h3> 
            <TextField 
            id='date'
            type='date'
            value={startDate}
            onChange={handleDate}/>
            </div> <br />  <br /> 

          
            <div className='customer_name'>
                <h3>Select Customer</h3>
                <select
                vlue={customerId}
                onChange={handleCustomer}
                className="select"
                >           
       <option value=''>select customer</option>
       {customers.length!==0 &&  customers.map((customer)=> {
           return (
                <option key={customer._id} value={customer._id}>
                    {customer.name}
                </option>
           )
       })}
                </select>
            </div> <br /> <br />

            <div className='product_name'>
                <b>Line Items</b> <br />
                <ProductSelect />
            </div> <br />

            <div>
                <ShowAddedProduct /> <br />

                <button class='button' onClick={billGenerate}>
                Generate Bill
            </button>
            </div>
            <div className='bill_dis'>
          {billDisplay && <BillDisplay />}
            </div>

            
        </div>        
    )
}

export default BillContainer
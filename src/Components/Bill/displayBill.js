import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Button} from '@material-ui/core'
import {startDeleteBill} from '../../Action/billAction'
import {startGetAccount} from '../../Action/adminAction'
import '../../index.css'


const DisplayBill=(props)=> { 
    const {bill, i}= props
    const dispatch= useDispatch()
    const customers = useSelector(state => state.customers);
  const products = useSelector(state => state.products);
  const admin = useSelector(state => state.admin);

  
  let customer, arr=[]

  console.log('bill', bill) 

  console.log('customers', bill) 
    
    useEffect(() => {
        dispatch(startGetAccount());
      }, [])

    const displayName=(id)=>{
      console.log('id', id) 
      customer=customers.filter((user)=> {
        return user._id===id
      })
      console.log('customer', customer)
      return customer[0]?.name
     }
      
    

    const displayProductName=(id)=> {
        // console.log('product id', id)
        arr= products.filter((product)=> {
            //  console.log('check',product._id)
            return product._id===id}) 
        // console.log('arr', arr)
        return arr[0]?.name  
    }

    
    return (
        <div className="bill_card">
      <div className="invoice_title">Invoice</div>
      <div className="invoice_header">
        <div><b>{displayName(bill.customer)}</b></div> 
        <div className="invoice_date">
          {bill.date&&bill.date.slice(0, bill.date.indexOf("T")).split("-").join("/")}
        </div>
      </div>
      <div className="invoice_table">
        <table className="bill_table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity in kg</th>
              <th>price in Rs</th>
              <th>subTotal in Rs</th>
            </tr>
          </thead>
          <tbody>
            {bill.lineItems &&  bill.lineItems.map((product,i) => {
              return (
                <tr key={i}> 
                  <td><b>{displayProductName(product.product)}</b></td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>{product.price * parseInt(product.quantity)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="invoice_total">Total-{bill.total}</div>
      <div className="invoice_sign_bill">  
                 
                
              <Button
               variant='contained'
               color='secondary'
               onClick={()=> dispatch(startDeleteBill(bill._id))}
              >
                  Delete
              </Button>

             

                 <h2 style={{fontFamily: 'cursive'}}>{admin.username}</h2>
             </div>

             <hr />

            </div>

        
    )
}

export default DisplayBill


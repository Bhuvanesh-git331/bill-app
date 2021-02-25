import { StylesProvider } from '@material-ui/core';
import React, {useEffect}from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Pdf from "react-to-pdf";
import {startGetAccount} from '../../Action/adminAction'
import '../../index.css' 

const ref=React.createRef()

const BillDisplay=(props)=> {
    const customers= useSelector((state)=> state.customers)
    const bill=useSelector((state)=> state.bill)
    const Products= useSelector((state)=> state.products)
    const admin= useSelector((state)=> state.admin)
    // console.log('bill', bill)

//    console.log('Products', Products)

    let customer=[], arr=[]
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(startGetAccount());
      }, [dispatch])

    const displayName=(id)=>{
        customer=customers.filter((user)=> user._id===id)
 
        return customer[0]?.name
    }

    const displayProductName=(id)=> {
        arr= Products.filter((product)=> product._id===id)
        return arr[0]?.name 
    }

    const styles={
         backgroundColor:'tomato',
         color: 'white', 
         textAlign:'center', 
         margin:30,
         width:'100%'
    }
    

    return (

        <div >
           
             <Pdf targetRef={ref} filename="bill.pdf" style={styles}>
          {({ toPdf }) => (
            
              <button  onClick={toPdf}>
                click to Download
              </button>
          
          )}
        </Pdf>
        

        {/* <button>Click to Download</button> */}
        <div className='show_bill' ref={ref}>

           
            <div className='invoice_title'>Invoice</div> <br />
            <div className='invoice_header'>
             <div>{displayName(bill[0]?.customer)}</div>  
             <div className='invoice_date'>
                 {
                  bill[0]?.date &&  bill[0]?.date.slice(0,bill[0]?.date.indexOf("T")).split("-").join("/")
                 }
                 </div> 
            </div> <br />
            <div className='invoice_table'>
             <table className='bill_table'>
            <thead>
              <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
              </tr>

            </thead>
            <tbody>
                {
                   bill[0]?.lineItems && bill[0]?.lineItems.map((product, i)=> {
                        return (
                            <tr key={i}>
                                <td>{displayProductName(product.product)}</td>
                                <td>{product.quantity}</td>
                                <td>{arr[0]?.price}</td>
                                <td>{arr[0]?.price * parseInt(product.quantity)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>

             </table> <br />
             <div className='invoice_total'>Total-{bill[0]?.total}</div>
             <div className='invoice_sign'> 
                 <h2 style={{fontFamily: 'cursive'}}>{admin.username}</h2>
             </div>

            </div>

        </div>
       
        </div>
    )
}

export default BillDisplay
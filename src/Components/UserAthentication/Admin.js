import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {startGetAccount} from '../../Action/adminAction'
import '../../index.css'



const Admin=(props)=> {
    const dispatch=useDispatch()
    const allBill= useSelector((state)=> state.allBill) 
    const customers= useSelector((state)=> state.customers)
    const products= useSelector((state)=> state.products)

    const tokenValue=JSON.parse(localStorage.getItem('token'))

    useEffect(()=> {
        dispatch(startGetAccount(tokenValue))
    }, [dispatch]) 

    const admin= useSelector((state)=> state.admin)

    // console.log('admin', admin)

    let sum=0

    allBill.forEach((bill)=> {
        sum=sum+Number(bill.total)
    })

   
    return (
        <div className="card">
            <img src="admin.png" alt='avatar' style={{width:'50%'}}/>
            <div className='container'>
         <h1>Welcome {admin.username}</h1>
         <p>Email-{admin.email}</p>
         <p>Enterprise Name- {admin.businessName}</p>
         <p>address- {admin.address}</p>
         <p>Total customers- {customers.length}</p>
         <p>Total Products- {products.length}</p>
         <p>Total Bill Amount- {sum} Rs</p>
         </div>
        </div>
    )
}

export default Admin
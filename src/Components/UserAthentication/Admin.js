import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {startGetAccount} from '../../Action/adminAction'



const Admin=(props)=> {
    const dispatch=useDispatch()

    const tokenValue=JSON.parse(localStorage.getItem('token'))

    useEffect(()=> {
        dispatch(startGetAccount(tokenValue))
    }, [dispatch]) 

    const admin= useSelector((state)=> state.admin)

    console.log('admin', admin)

   
    return (
        <div>
         <h1 className='adminHeader'>Welcome {admin.username}</h1>


        </div>
    )
}

export default Admin
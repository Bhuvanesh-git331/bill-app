import Raect, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {startGetAllBill} from '../../Action/billAction'
import DisplayBill from './displayBill'


const AllBill=(props)=> {
    const dispatch= useDispatch() 

    const allBill= useSelector((state)=> state.allBill)

    useEffect(()=> {
        dispatch(startGetAllBill())
    }, [dispatch]) 

    console.log('allBill', allBill)  
    

    return (
        <div className='all_bill'> 
            <div className='all_bill_header'> 
          <h1>All Generated Bill-{allBill.length}</h1>
            </div>

         <div className='all_bill_card'>
             {allBill.reverse().map((bill, i)=> {
                 return <DisplayBill bill={bill} key={i} i={i}/>
             })}
             </div>   

        </div>
    )
}

export default AllBill

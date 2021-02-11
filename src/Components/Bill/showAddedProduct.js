import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeLineItems} from '../../Action/billAction'


const ShowAddedProduct=(props)=> {

    const lineItems= useSelector((state)=> state.lineItem)
    const products= useSelector((state)=> state.products)
   const dispatch=useDispatch()

   console.log('lineItems', lineItems)

  let arr=[]
   const tokenValue=JSON.parse(localStorage.getItem('token'))

   
   const displayName=(id)=> {
 arr=products.find((product)=> {
      return product._id===id
  })
//   console.log('arr', arr)
    return arr.name
   }

   
   const removeProduct=(id)=> {
       dispatch(removeLineItems(id, tokenValue))
   }

    return (
        <div className='showproduct'>
            {lineItems.length===0 ? (
            <b>Add Product</b> 
            ) : (
                <table border='2'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                    </tr>
                </thead>

                <tbody>
                    {lineItems.map((ele)=> {
                        return (
                            <tr key={ele.product}>
                             <td>{displayName(ele.product)}</td>
                             <td>{ele.quantity}</td>
                             <td>{arr.price}</td>
                             <td>{arr.price*(ele.quantity)}</td>
                             <td>
                                 <button onClick={()=> removeProduct(ele.product)}>
                                     Delete
                                 </button>
                             </td>
                            </tr>
                        )
                    })}
                </tbody>

                </table>
            )
                }

        </div>
    )
}

export default ShowAddedProduct
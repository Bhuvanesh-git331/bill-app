import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addLineItems} from '../../Action/billAction'
import {Button} from '@material-ui/core'

const ProductSelect=(props)=> {
    const products= useSelector((state)=> state.products)
    const[productId, setProductId]=  useState(
        localStorage.getItem('productId') ? localStorage.getItem('productId') : ''
    )
    const [quantity, setQuantity]= useState(
        localStorage.getItem('quantity') ? localStorage.getItem('quantity') : 1
    )

    const dispatch= useDispatch()

    const handleProduct=(e)=> {
        setProductId(e.target.value) 
    } 

    const handleClick=()=> {
        if(productId.length>0 && quantity) {
            const data= {product: productId, quantity:quantity }
           
         dispatch(addLineItems(data))
         setProductId('')
         setQuantity(1)    
        }
    }

    return (
        <div className='product_select'>

            <select value={productId} onChange={handleProduct} className='select'>
             <option value=''>select product</option>  
             {products.map((product,i)=> {
                 return (
                     <option key={i} value={product._id}>
                         {product.name}
                     </option>
                 )
             })}  
            </select>
         
         <div className='quant'>
             <button
             className='butn' onClick={()=>{
                setQuantity(quantity===1 ? 1: quantity-1)
                localStorage.setItem('quantity', quantity-1)
             }
            }
             >
                 -
             </button>

            <p className='quant-text'>{quantity}</p> 

            <button className='butn'
             onClick={()=> {
                 setQuantity(quantity+1)
                 localStorage.setItem('quantity', quantity+1)
             }}>
                +
            </button> {' '}

            <Button variant='contained' color='primary' onClick={handleClick}>   
            
                <b>Add</b>

            </Button>

         </div>
        </div>
    )
}

export default ProductSelect
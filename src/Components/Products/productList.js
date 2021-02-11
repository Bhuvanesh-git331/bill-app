import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import EditProduct from './editProduct'
import {startRemoveProduct} from '../../Action/productAction'
import { Card } from '@material-ui/core';
import '../../index.css'

const ProductList=(props)=> {
    const {name, price, createdAt, _id}=props
    const [editProduct, setEditProduct] = useState(false)
    const [open, setOpen] = useState(false)

    const toggle=()=> {
        setOpen(false)
    }

    const dispatch=useDispatch()

    const tokenValue=JSON.parse(localStorage.getItem('token'))

    const handleDelete = (id) => {
        dispatch(startRemoveProduct(id, tokenValue));
      }

      const handleEdit = () => {
        setEditProduct(!editProduct);
        setOpen(true);
      }


    return (
        <div class="flex-container">
       
        
            <p>{name}</p>
            

        <div className="price">
        <h3>Price - {price}</h3>
       

       <button onClick={()=>handleDelete(_id)}>Delete</button> {' '}

       <button className='btn btn-primary' onClick={()=>handleEdit(_id)}>Edit</button>
       </div>
       {editProduct && (
          <EditProduct
            id={_id}
            name={name}
            price={price}
            open={open}
            toggle={toggle} /> 
    )}

    
    </div>
    )
}

export default ProductList
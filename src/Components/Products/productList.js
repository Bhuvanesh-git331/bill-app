import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import EditProduct from './editProduct'
import {startRemoveProduct} from '../../Action/productAction'
import { Button } from '@material-ui/core';
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
        <div className="product_list">
            <b style={{color:'green'}}>{name}</b>
            
        <div className="price">
        <h3>Price - {price}</h3>
       

       <Button 
       variant='contained'
       color='primary'
       onClick={()=>
       handleDelete(_id)}>
         Delete
         </Button> {' '}

       <Button 
       variant='contained'
       color='secondary'
       onClick={()=>handleEdit(_id)}>
         Edit
       </Button>
       
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
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import validator from "validator"
import {startProductsData, startEditProduct} from '../../Action/productAction'
import styled from 'styled-components'
import '../../index.css'

const h2Tag=styled.h2`
  right:'30%';
`;

const ProductForm=(props)=> {
    const {id, name:prodName, price:prodPrice, toggle }= props
    const [productData, setProductData]= useState(
        {name:prodName? prodName:'', 
        price:prodPrice? prodPrice:''}
        )
    const [formErrors, setFormErrors]= useState({})
    const errors={}

    const dispatch=useDispatch() 

    const tokenValue=JSON.parse(localStorage.getItem('token'))

    const handleChange=(e)=> {
        setProductData({...productData, [e.target.name]: e.target.value})  
    }

    const runValidation = () => {
        //name validation
        if (validator.isEmpty(productData.name)) {
          errors.name = "name can't be empty";
        }
        // price validation
        if (validator.isEmpty(productData.price)) {
          errors.price = "price can't be empty";
        } else if (!/^\d+$/.test(productData.price)) {
          errors.price = "price contains only digit";
        }
      }

    const handleSubmit=(e)=> {
        e.preventDefault()

        runValidation()

      if(Object.keys(errors).length===0) {
        setFormErrors({})
          if(id) {
              dispatch(startEditProduct(productData, id, toggle, tokenValue))
          } else {
              dispatch(startProductsData(productData, tokenValue))
              setProductData({name:'', price:''}) 
          }
      } else {
          setFormErrors(errors)
      }

    }

    return (
        <div>
          
       <div className='product_form'>
       

        <form onSubmit={handleSubmit}>
            <label><b>Product Name</b></label><br />

            <input 
             type='text'
             id='name'
             name='name'
             className="input"
             value={productData.name}
             onChange={handleChange}
             style={{width:'60%'}} /> <br /> 
              {formErrors.name && <span style={{color:'red'}}>{formErrors.name}</span> }  <br />  

              <label><b>Product Price</b></label><br />
             <input 
             type='text'
             id='price'
             name='price'
             className="input"
             value={productData.price}
             onChange={handleChange} 
             style={{width:'60%'}}/> <br />
              {formErrors.price && <span style={{color:'red'}}>{formErrors.price}</span> } <br />

             <input type='submit'value='Add Item' style={{background:''}} />

        </form>
        </div>
          
        </div>
    )
}

export default ProductForm 
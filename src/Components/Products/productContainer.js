import React, { useState, useEffect } from 'react'
import ProductForm from './productForm'
import ProductList from './productList'
import{useSelector, useDispatch} from 'react-redux'
import {startGetProductsData} from '../../Action/productAction'
import '../../index.css'


const ProductsContainer=(props)=> {
    const products= useSelector((state)=> state.products)
    const dispatch=useDispatch

   
        const tokenValue=JSON.parse(localStorage.getItem('token'))
        console.log(tokenValue)
        dispatch(startGetProductsData(tokenValue))
    

    
    return (
        
        <div className='product_container'>
        
          <h2 style={{fontFamily:'cursive'}}>Input Product details</h2>
            
        <br /> <br />

        
        <div class='alignleft'>
          <img src='https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/all-products-20170125054108782.gif' style={{width:'50%'}}/>
        </div>
       
        
        <ProductForm />
      
       <br /> 
      
      <div className="display_product_card">
        {products.length === 0 ? (
          <p className='product_header'>There is no existing product</p>
        ) : (
            <div> 
              <div className='product_header'>
             <h2>Total Products - {products.length}</h2> 
             </div>
         {
           products.map((product) => (
            <ProductList {...product} key={product._id} />
          ))
         }
          
          </div>
        )}

        </div>

        </div>

        
    )
}

export default ProductsContainer
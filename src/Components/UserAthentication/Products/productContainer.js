import React, { useState, useEffect } from 'react'
import ProductForm from './productForm'
import ProductList from './productList'
import{useSelector, useDispatch} from 'react-redux'
import {startGetProductsData} from '../../../Action/productAction'

const ProductsContainer=(props)=> {
    const [searchText, setSearchText]= useState('')

    const products= useSelector((state)=> state.products)

    const dispatch=useDispatch

   
    const handleSearch = (e) => {
        const name = e.target.value;
        setSearchText(name); 
      }

    

    return (
        
        <div className='product_container'> 
        <br /> <br />
        <div className='product_container_title'>
            <b>Add Product</b> <br />

            <input 
            type='text'
            value={searchText}
            onChange={handleSearch}
            placeholder='search the product'
            className='search_customer'/>
        </div>

      <div>
        <div className="form_container">
        <ProductForm />
      </div>
      
      <div className="display_product_card">
        {products.length === 0 ? (
          <p>There is no existing product</p>
        ) : (
          products.map((product) => (
            <ProductList {...product} key={product._id} />
          ))
        )}

        </div>

        </div>

        </div>
    )
}

export default ProductsContainer
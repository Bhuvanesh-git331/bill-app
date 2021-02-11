import React from 'react'
import ProductForm from './productForm'
import Modal from 'react-modal'
import {customStyles, buttonStyle} from '../Customers/modalsStyle'

const EditProduct=(props)=> {
    const {id, name, price, open, toggle}= props

    return (
        <div>

            <Modal isOpen={open} onRequestClose={toggle} style={customStyles}>
           <h1>Edit Customer</h1>
           
           <ProductForm
           id={id} name={name} price={price} toggle={toggle}/>

           <button onClick={toggle} style={buttonStyle}>
               close
           </button>

            </Modal>

        </div>
    )
}

export default EditProduct
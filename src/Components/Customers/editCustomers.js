import React from 'react'
import Modal from 'react-modal'
import CustomersForm from './customerForm'
import {customStyles, buttonStyle} from './modalsStyle'

const EditCustomers=(props)=> {
    const {id, name, email, mobile, open, toggle}= props

    return (
        <div>
           <Modal isOpen={open} onRequestClose={toggle} style={customStyles}>

           <h1>Edit Customer</h1>
            <CustomersForm 
            id={id}
            name={name}
            email={email}
            mobile={mobile}
            toggle={toggle}/> 

             <button onClick={toggle} style={buttonStyle}>
                close 
            </button>

           </Modal>

        </div>
    )
}

export default EditCustomers
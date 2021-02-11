import React from 'react'

 const initialValue=[]
  export const lineItems= (state=initialValue, action)=> {
    switch(action.type) {

        case 'ADD_LINEITEMS' : {
            console.log('action', action.payload)
           return [...state, action.payload]
        }

        case 'REMOVE_LINEITEMS' : {
            return state.filter((product)=> product.product!==action.payload)
        }

        case 'EMPTY_LINEITEMS' : {
           state.length=0
           return [...state]
        }

    default : {
        return [...state]
    }
    }
    
} 


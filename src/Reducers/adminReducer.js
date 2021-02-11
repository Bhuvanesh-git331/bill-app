import React from 'react'

const initialValue={}
const adminReducer=(state=initialValue, action)=> {
    switch(action.type) {

        case 'LIST_ADMIN' : {
            // console.log('admin reducer',action.payload)
            return {...action.payload}
        }

        default : {
            return {...state} 
        }
    }
}

export default adminReducer
import React from 'react'

const initialValue=[]
const customerReducer=(state=initialValue, action)=> {
 switch(action.type) {

    case 'ADD_CUSTOMER' : {
        return [...state, action.payload]
    }

    case 'LIST_CUSTOMER' : {
        return [...action.payload]
    }

    case 'DELETE_CUSTOMER' :{
        return state.filter((ele)=> {
                return ele._id!==action.payload._id
            })
        
    }

   case 'EDIT_CUSTOMER' : {
       return (
           state.map((ele)=> {
               if(ele._id===action.payload._id) {
                   return {...ele, ...action.payload}
               } else {
                   return {...state}
               }
           })
       )
   }


    default : {
        return [...state]
    }
 }

}

export default customerReducer
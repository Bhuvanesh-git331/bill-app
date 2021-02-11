import React from 'react'

const initialState=[]
export const billReducer=(state=initialState, action)=> {

    switch(action.type) {
        case 'ADD_BILL' : {
            // console.log('billaction', action.payload)
            return [{...action.payload}]
        }

        case 'LIST_BILL' : {
            return [...action.payload]
        }

        default : {
            return [...state]
        }
    }
}



import React from 'react'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../Reducers/usersReducer'
import customerReducer from '../Reducers/customerReducer'
import productsReducer from '../Reducers/productReducer'
import {lineItems} from '../Reducers/lineItemsReducer'
import {billReducer} from '../Reducers/billReducer'
import {allBillReducer} from '../Reducers/allBillReducer'
import adminReducer from '../Reducers/adminReducer'


const ConfigureStore=()=> {
    const store=createStore(combineReducers({
         users: usersReducer,
         customers: customerReducer,
         products:productsReducer,
         lineItem: lineItems,
         admin: adminReducer, 
         allBill:allBillReducer,
         bill: billReducer,
    }), applyMiddleware(thunk))  

    
    return store
}

export default ConfigureStore 
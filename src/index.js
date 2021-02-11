import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {usersStatus} from './Action/usersStatus'
import { startGetCustomerData } from './Action/customersAction';
import {startGetProductsData} from './Action/productAction'
import {startGetAccount} from './Action/adminAction'
import {startGetBill} from './Action/billAction'
import App from './App';
import configureStore from './Store/configureStore'



const store= configureStore()

// store.subscribe(()=> {
//   console.log('store', store.getState())
// })

if(JSON.parse(localStorage.getItem('token'))) {
  store.dispatch(startGetBill())
  store.dispatch(usersStatus())
  store.dispatch(startGetAccount())
  store.dispatch(startGetCustomerData())
  store.dispatch(startGetProductsData())
}

const ele= (
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   </Provider>
)

ReactDOM.render(ele,document.getElementById('root'));



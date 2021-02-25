import React, {useState} from 'react'
import {Link, Redirect, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import swal from 'sweetalert'
import {AppBar, IconBar, Button} from '@material-ui/core'
import {StyledLink} from '../../appStyled'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import CustomerContainer from '../Customers/customerContainer'
import ProductsContainer from '../Products/productContainer'
import BillContainer from '../Bill/billContainer'
import Admin from '../UserAthentication/Admin'
import AllBill from '../Bill/allBill'




const NavBar=(props)=> {
    const {userLoggedIn, handleAuth, handleMessage, message}= props

    const user= useSelector((state)=> state.users)
    const dispatch=useDispatch()
    

    return (
        <div >

  <div className='nav_links'>
       <StyledLink to='/'>Home</StyledLink> |
       {userLoggedIn ? (
          <>
              <StyledLink to='/products'>Products</StyledLink> |
              <StyledLink to='/customers'>Customers</StyledLink> |
              <StyledLink to='/billing'>Billing</StyledLink> |
              <StyledLink to='/allbill'>AllBill</StyledLink> | 

              <StyledLink to='/admin'>Admin</StyledLink> |

              <StyledLink to='/'onClick={()=> {
                  localStorage.removeItem('token')
                  swal('Successfully loggedout')
                  handleAuth()
                  
              }}>Logout</StyledLink> 
             
          </>  
      
       ) : (
           <>
         <StyledLink to='/register'>Register</StyledLink> |
         <StyledLink to='/login'>Login</StyledLink> 
          </>
       )}
       </div>
       

      <Route path='/' exact={true} component={Home}/>
      <Route path='/register' render={(props)=> {
           return <Register 
           {...props}
           handleMessage={handleMessage} exact={true}/>
      }}/>
      <Route path='/login' render={(props)=> {
           return <Login 
                    {...props}
                    handleAuth={handleAuth}
                    message={message} exact={true}/>
      }}/>
      <Route path='/products' component={ProductsContainer} exact={true}/>
      <Route path='/customers' component={CustomerContainer} exact={true}/>
      <Route path='/billing' component={BillContainer}/>
      <Route path='/admin' component={Admin} />
      <Route path='/allbill' component={AllBill} exact={true}/>
     

        </div>
    )
}

export default NavBar
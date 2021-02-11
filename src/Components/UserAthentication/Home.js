import React from 'react'
import styled from 'styled-components'
import '../../index.css'

const Title= styled.h1 `
  color:black;
  font-size: 2rem;
  text-align: center;
  position: relative;
  bottom: 0px;
  text-decoration:underline;
`;

const pTag= styled.p `
  color:black; 
  font-size:2rem; 
  text-align:center;
`;


const Home=(props)=> {

  
  return (
    <div className='home'>

<Title>Welcome to Bangalore Restaurant Supply</Title> <br />

      <img src='https://www.supplychain247.com/images/article/how_restaurant_supply_chains_can_achieve_network_effect_wide.jpg' style={{width:'50%'}}/>
    <br /> <br /> 
    
  <p style={{color:'black', fontSize:'1.5rem'}}>
  Bangalore Restaurant Supply has a large inventory of in-stock restaurant equipment and supplies available at wholesale prices available on-line or in store. Founded in the year 1975 and headquartered in San Antonio, Texas. 

  We are specialists at Restaurant Equipment, Restaurant Supplies, Customer Service, Marketing, Accounting, Purchasing, E-Commerce, Wholesale, Equipment Specialists, Customer Relations, Management, Warehouse, Shipping Logistics, Development, Content Specialists, Sales, and Retail Sales.
   <br />

  
    If you are a new user please <b>Register</b> by clicking on register option on the top and then you can <b>Login</b> with your credentials. Else if you hve already registered, then click on login to proceed further.
  </p>

      

    <p style={{color:'black', fontSize:'1rem', paddingTop:'160px'}}>contact us at <a href='http://www.bangaloresupply.com' target='_blank' >BangaloreSupply</a> or call us 888-898-8079</p>

 
</div>
  )
}

export default Home 
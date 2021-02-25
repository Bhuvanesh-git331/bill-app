import React, { useEffect, useState } from 'react'
import NavBar from './Components/UserAthentication/navBar'
// import './App.css'


const App=(props)=> {
  const [message, setMesage]= useState('')
  const [userLoggedIn, setUserLoggedIn]= useState(false)

  const mystyle = {
    color: "white",
    backgroundColor: "green",
    padding: "10px",
    fontFamily: "Arial",
    fontSize:'2.5rem'

  }

  const handleMessage=(msg)=> {
       setMesage(msg)
  }

  const handleAuth=()=> {
    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(()=> {
    if(JSON.parse(localStorage.getItem('token'))) {
      handleAuth()
    }

  }, [])

  return (
    <div className='container'>

     <div className='home_header'>
      <h1 style={mystyle}>Bangalore Restaurant Supply Bill Application</h1>
      </div> 

     <div >
      <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth} handleMessage={handleMessage} message={message} />
      </div>
    </div>
  )
}

export default App;
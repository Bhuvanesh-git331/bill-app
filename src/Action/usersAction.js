import axios from '../Config/axios'
import swal from 'sweetalert'

const registerUser=(userData)=> {
    return {
        type: 'ADD_USER',
        payload: userData
    }
}

export const startUserRegister=(formData, handleRedirect)=> {

    return (dispatch)=> {
        axios.post('/users/register', formData)
        .then(res=> {
        //  console.log(res.data)
         const userData= res.data

        if(userData.hasOwnProperty('errors')) {
            swal('username or email is already registered')
           
        } else {
            handleRedirect(registerUser(userData))  
        } 
        
        dispatch(registerUser(userData))
        })
        .catch(err=> {
            alert(err.message)
        })
    }
}





export const startLoginData=(loginData, handleRedirect)=> {

    // console.log('loginData', loginData)

    return (dispatch)=> {
        axios.post('/users/login', loginData)
        .then(res=> {
            // console.log('login', res.data)

            const data= res.data 
            if(data.hasOwnProperty('errors')) {
                swal (data.errors)
                
            } else {
                handleRedirect()
                localStorage.setItem('token', JSON.stringify(data.token)) 
                
            }
        })
    }
}




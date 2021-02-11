import axios from '../Config/axios'
import {Redirect} from 'react-router-dom'
import swal from 'sweetalert'

const token= JSON.parse(localStorage.getItem('token'))

const adminAccount=(result)=> {
    return {
        type: 'LIST_ADMIN',
        payload: result
    }
}

export const startGetAccount=()=> {
    return (dispatch)=> {

        axios.get('/users/account', {
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res=>{
             const result= res.data
            //  console.log('account', result)
             
             if(result) {
                dispatch(adminAccount(result))
             } else {
                 swal("Sorry", "You need to login first")
             }
            
            
        })
        .catch(err=> {
            alert(err.message)
        })
    }
}
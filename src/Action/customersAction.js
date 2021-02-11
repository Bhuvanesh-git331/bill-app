import axios from '../Config/axios'
import swal from 'sweetalert'


const token = JSON.parse(localStorage.getItem('token'))

const customerData=(result)=> {

    return {
        type: 'ADD_CUSTOMER',
        payload: result     
    }
}

export const startCustomersData=(customersData, tokenValue)=> {

    return (dispatch)=>{
        axios.post('/customers', customersData, {
            
            headers: {
              Authorization: `Bearer ${tokenValue}`
            } 
        }) 
        .then(res=> {
            // console.log(res.data)
        const result= res.data
          
        if(result.hasOwnProperty('errors')) {
            swal(result.message)
        } else {
            swal(`Congrats!! you have successfully added the customer ${result.name}`)

            dispatch(customerData(result))
        }       
        })
    }
}



const customersList=(result)=> {
    return {
        type: 'LIST_CUSTOMER',
        payload: result
    }
}

export const startGetCustomerData=()=> {

    return (dispatch)=> {
        axios.get('/customers', {
            headers : {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=> {
            // console.log(res.data)
            const result= res.data

            dispatch(customersList(result))
        })
    }
}


const removeCustomer=(result)=> {
    return {
        type: 'DELETE_CUSTOMER',
        payload: result
    }
}

export const startRemoveCustomersData=(id, tokenValue)=> {

    return (dispatch)=> {

        axios.delete(`/customers/${id}`, {
            headers : {
                Authorization : `Bearer ${tokenValue}`
            }
        })  
        .then(res=> {
            console.log('remove',res.data)

            const result=res.data
            dispatch(removeCustomer(result))
            swal("Hey", "You Removed Successfully", "success")
        })
        .catch(err=> {
            alert(err.message)
        })
    }
}



const editCustomer=(result)=> {
    return {
        type:'EDIT_CUSTOMER',
        payload:result
    }
}

export const startEditCustomer=(customersData, id, toggle, tokenValue)=> {

    return (dispatch)=> {
        axios.put(`/customers/${id}`,customersData , {
            headers : {
                Authorization : `Bearer ${tokenValue}`
            }
        })
        .then(res=> {
            console.log('Edit', res.data)
            const result= res.data
            
            dispatch(editCustomer(result))
            toggle()
            swal("superb", "successfully updated", "success")
        })
        .catch((err) => alert(err.message));
    }
}
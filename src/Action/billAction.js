import axios from '../Config/axios'
import swal from 'sweetalert'

const tokenValue=JSON.parse(localStorage.getItem('token'))
console.log(tokenValue)

export const addLineItems=(data)=> {
    console.log('billdata', data)
    return {type: 'ADD_LINEITEMS', payload: data}
}


export const removeLineItems=(id, tokenValue)=> {
    return {type: "REMOVE_LINEITEMS", payload:id}
}


export const emptyLineItems=()=> {
    return {type: 'EMPTY_LINEITEMS'}
}



const addBill=(result)=> {
    return {
        type: 'ADD_BILL',
        payload: result
    }
}


export const startCreateBill=(data, tokenValue)=> {
    console.log('data', data)
    return (dispatch)=> {
        axios.post('/bills', data, {
            headers : {
                Authorization : `Bearer ${tokenValue}`
            }
        })
        .then(res=> {
            const result= res.data
            console.log('result', result)
            dispatch(addBill(result))
            // localStorage.removeItem('date')
            // localStorage.removeItem('id')
            // localStorage.removeItem('productId')
            // localStorage.removeItem('quantity')
            swal("Tada", "Your Bill has generated")
            dispatch(emptyLineItems())
        })
        .catch(err=> {
            alert(err.message)
        })   
    }
}



const billList=(result)=> {
    return {
        type: 'GET_BILL',
        payload: result
    }
}

export const startGetAllBill=()=> {

    return (dispatch)=> {
        axios.get('/bills', {
            headers: {
                Authorization : `Bearer ${tokenValue}` 
            }
        })
        .then(res=> {
            const result= res.data
            console.log('result', result) 
            dispatch(billList(result))
        })
        .catch(err=> {
            alert(err.message) 
        })
    }
}



const deleteBill=(result)=> {
    return {
        type: "DELETE_BILL",
        payload: result
    }
}

export const startDeleteBill=(id)=>{
    console.log('id', id)
    return (dispatch)=> {
        axios.delete(`/bills/${id}`, {
            headers: {
                'Authorization': `Bearer ${tokenValue}`
            }
        })
        .then(res=> {
            const result= res.data
            console.log(result)
            dispatch(deleteBill(result))
            swal("hey", "you have removed this bill successfully", "success");
        })
        .catch(err=> {
            alert(err.message)
        })
    }
}
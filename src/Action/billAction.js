import axios from '../Config/axios'
import swal from 'sweetalert'

const tokenValue=JSON.parse(localStorage.getItem('token'))

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
        type: 'LIST_BILL',
        payload: result
    }
}

export const startGetBill=()=> {
    return (dispatch)=> {
        axios.get('/bills', {
            headers: {
                Authorization: `Bearer ${tokenValue}`
            }
        })
        .then(res=> {
            const result= res.data
            dispatch(billList(result))
        })
    }
}
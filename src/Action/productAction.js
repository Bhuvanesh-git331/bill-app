import axios from '../Config/axios'
import swal from 'sweetalert'

const token = JSON.parse(localStorage.getItem('token'))

const addProduct=(result)=> {
    return {
        type: 'ADD_PRODUCT',
        payload: result
    }
}

export const startProductsData=(productData,tokenValue)=> {
//    console.log('product', productData, tokenValue)
    return (dispatch)=> {

        axios.post("/products", productData, {
            headers : {
                Authorization : `Bearer ${tokenValue}`
            }
        })
        .then(res=> {
            // console.log(res.data)

            const result=res.data
            dispatch(addProduct(result))
        })
        .catch(err=> {
            alert(err.message)
        })
    }
}



const showProduct=(result)=> {
    return {
        type: 'LIST_PRODUCT', 
        payload: result
    }
}

export const startGetProductsData=()=> {
   

    return (dispatch)=> {
        axios.get('http://dct-billing-app.herokuapp.com/api/products', {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res=> {
            // console.log(res.data)

            const result= res.data
            dispatch(showProduct(result))
        })
        .catch(err=>{
            alert('all prods', err.message)
        })
    }

}



const removeProduct=(result)=> {
    return {
        type: 'REMOVE_PRODUCT',
        payload:result
    }
}


export const startRemoveProduct=(id, tokenValue)=> {

    return (dispatch)=> {
        axios.delete(`/products/${id}`, {
            headers : {
                'Authorization' : `Bearer ${tokenValue}` 
            }
        })
        .then(res=> {
            // console.log('removeprod', res.data) 

            const result=res.data
            dispatch(removeProduct(result))
            swal("Hey", "You Removed Successfully", "success")
        })
        .catch(err=> {
            alert(err.message)
        })

    }
}


const editProduct=(result)=> {
    return {
        type: 'EDIT_PRODUCT',
        payload: result
    }
}

export const startEditProduct=(productData, id, toggle, tokenValue)=> {
    return (dispatch)=> {

        axios.put(`/products/${id}`, productData, {
            headers : {
                 'Authorization': `Bearer ${tokenValue}`
            }
        })
        .then(res=> {
            // console.log(res.data)

            const result= res.data
            dispatch(editProduct(result))
            toggle()
            swal('Congrats', 'you have successfully updated the data')
        })
        .catch(err=> {
            alert(err.message)
        })
    }
}
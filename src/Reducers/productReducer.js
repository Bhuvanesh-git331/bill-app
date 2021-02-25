

const initialValue=[]
const productsReducer=(state=initialValue, action)=> {
   switch(action.type) {

    case 'ADD_PRODUCT' : {
        return [...state, action.payload]
    }

    case 'REMOVE_PRODUCT' : {
        return state.filter((product)=> {
            return product._id!==action.payload._id
        })
    }

    case 'LIST_PRODUCT' : {
        return [...action.payload]
    }

    case 'EDIT_PRODUCT' : {
        return state.map((product)=> {
            if(product._id===action.payload._id) {
                return {...product, ...action.payload}
            } else {
                return {...product}
            }
        })
    }


    default : {
        return [...state]
    }
   }


}

export default productsReducer
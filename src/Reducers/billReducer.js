

const initialState=[]
export const billReducer=(state=initialState, action)=> {

    switch(action.type) {
        case 'ADD_BILL' : {
            // console.log('billaction', action.payload)
            return [...state,action.payload]
        }

        default : {
            return [...state]
        }
    }
}





const initialState=[]
export const allBillReducer=(state=initialState, action)=> {

    switch(action.type) {
        
        case 'GET_BILL' : {
            console.log('action.paylod', action.payload)
            return [...action.payload]
           
        }

        case 'DELETE_BILL' : {
            return state.filter((ele)=> {
                return ele._id!==action.payload._id 
            })
        }

        default :{
         return [...state]
        }
    }
}
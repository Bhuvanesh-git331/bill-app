const initialState= false

export const usresStatusReducer=(state=initialState, action)=> {
    switch(action.type) {
        case 'TOGGLE-STATE' : {
            return !state
        }

        default : {
            return state
        }
    }
}
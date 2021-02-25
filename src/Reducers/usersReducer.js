

const initialValue=[]

const usersReducer=(state=initialValue, action)=> {
   switch(action.type) {

      case 'ADD_USER' : {
         
        return[...state, action.payload]

      }

      
      
          default : {
              return [...state]
          }
   }

}


export default usersReducer
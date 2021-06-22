import {LOG_IN, LOG_OUT, DELETE_DATA, VIEW_DATA, EDIT_DATA, GET_DATA} from './ActionType'


const initialState={
    data:[],
    viewData:[],
    isLogedIn:false,
    username:'',
    loading:true,
    edit:'',
}

const dataReducer = (state= initialState , action)=>{
    switch(action.type){
        
      case LOG_IN: return{
          ...state,
          isLogedIn:true,
          username:action.payload,
          edit:''
          
         
        }

        // case LOG_OUT: 
        // sessionStorage.clear()
        // return{
        //   ...state,
        //   isLogedIn:false,
        //   data:[],
        //   viewData:[]  
        // }

        case GET_DATA: return{
          ...state,
          data:action.payload,
          loading:false,
          edit:''
          
            
        }
        case VIEW_DATA:
          return{
            ...state,
            viewData:action.payload,
            loading:false,
            edit:''
          }

          case EDIT_DATA:
          return{
            ...state,
            edit:action.payload,
            loading:false
          }
        
         case DELETE_DATA:
           return{
             ...state
           } 
        default :
        return state

    }
    
}
export default dataReducer
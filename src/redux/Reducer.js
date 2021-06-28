import {LOG_IN, LOG_OUT, DELETE_DATA,  EDIT_DATA,  VIEW_DATA_ERROR, VIEW_DATA_SUCCESS, GET_DATA_SUCCESS, GET_DATA_ERROR} from './ActionType'


const initialState={
    data:[],
    viewData:[],
    isLogedIn:false,
    username:'',
    loading:true,
    edit:'',
    err:''
}

const dataReducer = (state= initialState , action)=>{
    switch(action.type){
        
      case LOG_IN: return{
          ...state,
          isLogedIn:true,
          username:action.payload,
          edit:''
          
         
        }

        case LOG_OUT: 
        return{
          ...state,
          isLogedIn:false,
          data:[],
          viewData:[],
          edit:'',
          loading:false
        }
        

        case GET_DATA_SUCCESS: return{
          ...state,
          data:action.payload,
          loading:false,
          edit:'',
          err:'',
          viewData:[]
          
            
        }
        case GET_DATA_ERROR: return{
          ...state,
          err:action.payload,
          loading:false,
          edit:''
          
            
        }
        case VIEW_DATA_SUCCESS:
          return{
            ...state,
            viewData:action.payload,
            loading:false,
            edit:'',
            err:''
          }
        case VIEW_DATA_ERROR:
          return{
            ...state,
            err:action.payload,
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
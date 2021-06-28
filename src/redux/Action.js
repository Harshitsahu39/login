import {LOG_IN, LOG_OUT, DELETE_DATA, EDIT_DATA, VIEW_DATA_SUCCESS,  GET_DATA_SUCCESS, GET_DATA_ERROR} from './ActionType'
import {editData, getData, viewData, deleteData} from '../components/Api'
import { useHistory } from 'react-router'

export const logIn = (data) =>{
    const token = '123456abcdef';
    sessionStorage.setItem('auth-token', token); 
    return{
        type : LOG_IN,
        payload: data,
        
    }
   
}

export const getUser = () => async dispatch => {
    
    
        getData().then(res=>{
            dispatch( {
                type: GET_DATA_SUCCESS,
                payload: res.data.data
            })

    })
    .catch(err=>{
        dispatch( {
            type: GET_DATA_ERROR,
            payload: err.message
        })
    })
    
    

}


export const viewUser = (id) =>  dispatch => {

viewData(id).then(res=>{
    dispatch( {
        type: VIEW_DATA_SUCCESS,
        payload: res.data.data
    })

})
.catch(err=>{
    dispatch( {
        type: VIEW_DATA_SUCCESS,
        payload: err.message
    })
})



}
export const editUser = (id,user) =>  dispatch => {

    

    editData(id,user).then(res=>{
        alert('submitted')
        dispatch( {
            type: EDIT_DATA,
            payload: 'sucess'
            
        })
       
    
    })
    .catch(err=>{
    console.log(err)

    })
    
    }

export const deleteUser = (id) =>  dispatch => {
deleteData(id).then(res=>{
    dispatch( {
        type: DELETE_DATA,
        payload: res.data
    })
    alert("deleted")

})
.catch(err=>{
console.log(err)
})



}
export const logOut = () =>{
    sessionStorage.removeItem('auth-token')
return{
    type : LOG_OUT,
}
}
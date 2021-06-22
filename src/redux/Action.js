import {LOG_IN, LOG_OUT, DELETE_DATA, VIEW_DATA, EDIT_DATA, GET_DATA} from './ActionType'
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
                type: GET_DATA,
                payload: res.data.data
            })

    })
    .catch(err=>{
        console.log(err)
    })
    
    

}


export const viewUser = (id) =>  dispatch => {


viewData(id).then(res=>{
    dispatch( {
        type: VIEW_DATA,
        payload: res.data.data
    })

})
.catch(err=>{
console.log(err)
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
return{
    type : LOG_OUT,
    
    
}
}
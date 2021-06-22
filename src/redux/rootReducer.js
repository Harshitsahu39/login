import {combineReducers, applyMiddleware}from 'redux'
import dataReducer from './Reducer'



const rootReducer = combineReducers({
    data: dataReducer,
    
})

export default rootReducer
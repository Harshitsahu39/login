import {createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState={

}

export const store = createStore(rootReducer ,initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)))


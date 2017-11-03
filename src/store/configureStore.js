import {createStore} from 'redux'
import combineReducer from '../reducers/combineReducer'


export default function(initialState){
const store=createStore(combineReducer,initialState)
  return store
}

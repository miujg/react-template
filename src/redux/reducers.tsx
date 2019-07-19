/**
 * reduce 集合
 */
 
import  {combineReducers} from 'redux'
import {user} from './reducer/user'
import {info} from './reducer/info'

const reducers = combineReducers({user, info})
export {
   reducers
}